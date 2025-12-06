import { useState } from "react";
import "../styles.scss";

const ChapterExample4 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const botCode = `# ============================================================================
# TELEGRAM BOT FOR SERVICE BOOKINGS (BEAUTY SALON, DENTAL CLINIC, ETC.)
# ============================================================================
# Author: FlyApp Studio
# Description: This bot allows clients to book services, view, and cancel
#              their appointments. Data is stored in Google Sheets.
# ============================================================================

# --- LIBRARY IMPORTS ---
import telebot  # Main library for Telegram Bot API
from telebot import types  # Keyboard and button types
import gspread  # Google Sheets integration
from google.oauth2.service_account import Credentials  # Google API authentication
import schedule  # Task scheduling (reminders)
import time  # Time utilities
from datetime import datetime, timedelta  # Dates and time intervals
import threading  # Multithreading for scheduler
from requests.adapters import HTTPAdapter  # HTTP adapter for retries
from urllib3.util.retry import Retry  # Retry strategy

# --- CONFIGURATION ---
BOT_TOKEN = 'your token here'  # Bot token from @BotFather
SHEET_ID = 'your sheet ID here'  # Google Sheet ID
CREDENTIALS_FILE = 'credentials.json'  # File with Google API credentials

# --- BOT INITIALIZATION ---
bot = telebot.TeleBot(BOT_TOKEN)

# --- FUNCTION TO CONNECT TO GOOGLE SHEETS ---
def get_google_client():
    """
    Creates a connection to the Google Sheets API with timeout and retry settings.
    
    Returns:
        client: Authorized gspread client
    """
    scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
    creds = Credentials.from_service_account_file(CREDENTIALS_FILE, scopes=scope)
    client = gspread.authorize(creds)
    
    retry_strategy = Retry(
        total=3,
        backoff_factor=1,
        status_forcelist=[429, 500, 502, 503, 504],
    )
    adapter = HTTPAdapter(max_retries=retry_strategy)
    client.http_client.session.mount("https://", adapter)
    client.http_client.timeout = 30
    return client

# --- CONNECT TO GOOGLE SHEETS WITH ERROR HANDLING ---
try:
    print("🔄 Connecting to Google Sheets...")
    client = get_google_client()
    sheet = client.open_by_key(SHEET_ID).sheet1
    print("✅ Successfully connected to Google Sheets")
except Exception as e:
    print(f"❌ Google Sheets connection error: {e}")
    print("Check:")
    print("1. Internet connection")
    print("2. credentials.json file")
    print("3. Sheet access permissions")
    exit(1)

# --- INITIALIZE SHEET HEADERS ---
def init_sheet():
    """
    Checks if the sheet has headers and creates them if needed.
    Headers: user_id, service, date, time, status
    """
    try:
        headers = sheet.row_values(1)
        if not headers or headers != ['user_id', 'service', 'date', 'time', 'status']:
            sheet.clear()
            sheet.append_row(['user_id', 'service', 'date', 'time', 'status'])
            print("Headers added to the sheet")
    except Exception as e:
        print(f"Initialization error: {e}")

init_sheet()

# --- SERVICE AND WORK HOURS CONFIGURATION ---
SERVICES = {
    'Haircut': 60,
    'Hair coloring': 120,
    'Manicure': 90,
    'Pedicure': 30
}

WORK_HOURS = {
    'start': 9,
    'end': 20
}

# --- USER STATES DICTIONARY ---
user_states = {}

# ====================================================================
# DATA HANDLING FUNCTIONS
# ====================================================================

def save_appointment(user_id, service, date, time_slot):
    """
    Saves a new appointment in Google Sheets.
    """
    try:
        sheet.append_row([str(user_id), service, date, time_slot, 'confirmed'])
        return True
    except Exception as e:
        print(f"Save error: {e}")
        return False

def get_user_appointments(user_id):
    """
    Retrieves all appointments of a specific user.
    """
    try:
        records = sheet.get_all_records()
        user_appointments = []
        for i, rec in enumerate(records):
            if str(rec.get('user_id', '')) == str(user_id):
                user_appointments.append({
                    'row': i + 2,
                    'service': rec.get('service', ''),
                    'date': rec.get('date', ''),
                    'time': rec.get('time', ''),
                    'status': rec.get('status', '')
                })
        return user_appointments
    except Exception as e:
        print(f"Error retrieving appointments: {e}")
        return []

def cancel_appointment_by_row(row_number):
    """
    Cancels (deletes) an appointment by row number.
    """
    try:
        sheet.delete_rows(row_number)
        return True
    except Exception as e:
        print(f"Cancellation error: {e}")
        return False

def check_conflict(date, time_slot):
    """
    Checks if a time slot is already booked.
    """
    try:
        records = sheet.get_all_records()
        for rec in records:
            if rec.get('date') == date and rec.get('time') == time_slot:
                return True
        return False
    except Exception as e:
        print(f"Conflict check error: {e}")
        return False

# ====================================================================
# REMINDER SYSTEM
# ====================================================================

def send_reminder():
    """
    Sends reminders to users 24 hours before their appointment.
    """
    try:
        records = sheet.get_all_records()
        now = datetime.now()
        for rec in records:
            try:
                appt_time = datetime.strptime(f"{rec.get('date', '')} {rec.get('time', '')}", "%Y-%m-%d %H:%M")
                time_diff = (appt_time - now).total_seconds()
                if 23 * 3600 <= time_diff <= 25 * 3600:
                    user_id = rec.get('user_id', '')
                    if user_id:
                        bot.send_message(
                            int(user_id),
                            f"🔔 Reminder: {rec.get('service', '')} tomorrow at {rec.get('time', '')} ({rec.get('date', '')})"
                        )
            except (ValueError, TypeError) as e:
                print(f"Skipped invalid record: {e}")
                pass
    except Exception as e:
        print(f"Reminder sending error: {e}")

def run_scheduler():
    """
    Runs the scheduler in a background thread.
    Checks appointments daily at 10:00 and sends reminders.
    """
    schedule.every().day.at("10:00").do(send_reminder)
    while True:
        schedule.run_pending()
        time.sleep(60)

threading.Thread(target=run_scheduler, daemon=True).start()

# ====================================================================
# BOT COMMAND HANDLERS
# ====================================================================

@bot.message_handler(commands=['start'])
def start(message):
    """
    /start handler - initializes bot and shows services menu.
    """
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    for service in SERVICES:
        markup.add(types.KeyboardButton(service))
    markup.add(types.KeyboardButton("Cancel appointment"))
    bot.send_message(
        message.chat.id,
        "👋 Welcome! Choose a service or cancel an appointment:",
        reply_markup=markup
    )
    user_states[message.from_user.id] = {'step': 'service'}

# ... (all other handlers should also be translated similarly)`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(botCode).then(() => {
      setCopySuccess("Code copied ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };

  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">Example 4: Telegram bot for client bookings (more advanced; requires basic terminal skills and ability to run code on a server)</h2>
        <p className="chapter__text">
          This example is more advanced; it requires a server or PC to keep the bot running. It integrates with Google Sheets, sends reminders, allows appointment cancellations, and optimizes the conversation flow.
        </p>

        <div className="example-box">
          <ol>
            <li>
              <b>Create a Google Sheet:</b><br />
              - Create a new sheet with columns: <code>user_id | service | date | time | status</code>.<br />
              - Name the sheet, e.g., <code>Appointments</code>.
            </li>

            <li>
              <b>Create a Service Account in Google Cloud:</b>
              <ol>
                <li>Go to <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Console</a>.</li>
                <li>Create a new project and give it a name, e.g., <code>TelegramBotProject</code>.</li>
                <li>In the left menu, go to <b>IAM & Admin → Service Accounts</b> → click <b>Create Service Account</b>.</li>
                <li>Enter a name (e.g., <code>telegram-bot-sa</code>) and description, click <b>Create</b>.</li>
                <li>Add role <b>Project → Editor</b> for Google Sheets access.</li>
                <li>After creation, click <b>Manage Keys → Add Key → Create New Key → JSON</b>.</li>
                <li>The <code>credentials.json</code> file will download. Move it to the bot folder.</li>
              </ol>
            </li>

            <li>
              <b>Grant Google Sheet access to Service Account:</b><br />
              - Open the sheet → click <b>Share</b> → enter your Service Account email → give Editor rights → click <b>Send</b>.
            </li>

            <li>
              <b>Install Python and libraries:</b><br />
              - Ensure Python is installed.<br />
              - In terminal, run: <code>pip install pyTelegramBotAPI gspread oauth2client schedule</code>.
            </li>

            <li>Replace the following in the code with your own values:</li>
            <ul>
              <li>BOT_TOKEN = 'token'</li>
              <li>SHEET_ID = 'Google Sheet ID from URL'</li>
              <li>CREDENTIALS_FILE = 'credentials.json'</li>
            </ul>

            <li>
              <b>Bot code (bot.py):</b>
              <div className="code-container">
                <pre><code>{botCode}</code></pre>
                <button onClick={copyToClipboard}>Copy code</button>
                {copySuccess && <span className="copy-success">{copySuccess}</span>}
              </div>
            </li>

            <li>
              <b>Run the bot:</b><br />
              <p>- Go to <a
                href="https://console.developers.google.com/apis/api/sheets.googleapis.com/overview"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Cloud Console
              </a></p>
              <p>- Click "Enable" for Sheets API.</p>
              - Open terminal in the folder with <code>bot.py</code>.<br />
              - Run: <code>python bot.py</code> to start the bot online.
            </li>

            <li>
              <b>Testing:</b><br />
              - In Telegram, send <code>/start</code>.<br />
              - Choose service → date → time.<br />
              - Click "Cancel appointment" to test.<br />
              - Check reminders and Google Sheet updates.
            </li>

            <li>
              <b>Add to portfolio:</b><br />
              - Screenshots of Telegram bot + Google Sheet.<br />
              - Short description: "Telegram bot for client bookings, Google Sheets integration, reminders, cancellations, conversation optimization."
            </li>
          </ol>
          <div className="portfolio">
            <a href="/ptelegr.jpg" target="_blank" rel="noopener noreferrer">
              <img src="/telegr.jpg" alt="Telegram" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChapterExample4;
