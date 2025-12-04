import { useState } from "react";
import "./styles.scss";

const ChapterExample4 = () => {
  const [copySuccess, setCopySuccess] = useState("");
  const botCode = `# ============================================================================
# TELEGRAM БОТ ДЛЯ ЗАПИСУ НА ПОСЛУГИ (САЛОН КРАСИ, СТОМАТОЛОГІЯ, ТА ІН.)
# ============================================================================
# Автор: FlyApp Studio
# Опис: Бот дозволяє клієнтам записуватися на послуги, переглядати та 
#       скасовувати свої записи. Дані зберігаються в Google Sheets.
# ============================================================================

# --- ІМПОРТ БІБЛІОТЕК ---
import telebot  # Основна бібліотека для роботи з Telegram Bot API
from telebot import types  # Типи клавіатур та кнопок
import gspread  # Робота з Google Sheets
from google.oauth2.service_account import Credentials  # Авторизація Google API
import schedule  # Планування завдань (нагадування)
import time  # Робота з часом
from datetime import datetime, timedelta  # Дати та часові інтервали
import threading  # Багатопоточність для планувальника
from requests.adapters import HTTPAdapter  # HTTP адаптер для retry
from urllib3.util.retry import Retry  # Стратегія повторних спроб

# --- КОНФІГУРАЦІЯ ---
BOT_TOKEN = 'тут твій токен'  # Токен бота від @BotFather
SHEET_ID = 'тут ID таблиці'  # ID Google таблиці
CREDENTIALS_FILE = 'credentials.json'  # Файл з даними для доступу до Google API

# --- ІНІЦІАЛІЗАЦІЯ БОТА ---
bot = telebot.TeleBot(BOT_TOKEN)

# --- ФУНКЦІЯ ПІДКЛЮЧЕННЯ ДО GOOGLE SHEETS ---
def get_google_client():
    """
    Створює з'єднання з Google Sheets API з налаштуванням timeout та retry.
    
    Повертає:
        client: Авторизований клієнт gspread
    """
    # Визначаємо права доступу до Google Sheets та Drive
    scope = ['https://spreadsheets.google.com/feeds', 'https://www.googleapis.com/auth/drive']
    
    # Завантажуємо облікові дані з JSON файлу
    creds = Credentials.from_service_account_file(CREDENTIALS_FILE, scopes=scope)
    
    # Авторизуємося в gspread
    client = gspread.authorize(creds)
    
    # Налаштовуємо стратегію повторних спроб при помилках
    retry_strategy = Retry(
        total=3,  # Максимум 3 спроби
        backoff_factor=1,  # Затримка між спробами (1, 2, 4 секунди)
        status_forcelist=[429, 500, 502, 503, 504],  # HTTP коди для retry
    )
    adapter = HTTPAdapter(max_retries=retry_strategy)
    client.http_client.session.mount("https://", adapter)
    
    # Встановлюємо timeout 30 секунд (уникнення вічного очікування)
    client.http_client.timeout = 30
    
    return client

# --- ПІДКЛЮЧЕННЯ ДО GOOGLE SHEETS З ОБРОБКОЮ ПОМИЛОК ---
try:
    print("🔄 Підключення до Google Sheets...")
    client = get_google_client()
    sheet = client.open_by_key(SHEET_ID).sheet1  # Відкриваємо перший лист таблиці
    print("✅ Успішно підключено до Google Sheets")
except Exception as e:
    print(f"❌ Помилка підключення до Google Sheets: {e}")
    print("Перевірте:")
    print("1. Інтернет з'єднання")
    print("2. credentials.json файл")
    print("3. Доступ до таблиці")
    exit(1)  # Завершуємо програму при помилці підключення

# --- ІНІЦІАЛІЗАЦІЯ ЗАГОЛОВКІВ У ТАБЛИЦІ ---
def init_sheet():
    """
    Перевіряє наявність заголовків у таблиці та створює їх при необхідності.
    Заголовки: user_id, service, date, time, status
    """
    try:
        headers = sheet.row_values(1)  # Читаємо перший рядок
        # Якщо заголовків немає або вони неправильні - створюємо нові
        if not headers or headers != ['user_id', 'service', 'date', 'time', 'status']:
            sheet.clear()  # Очищаємо таблицю
            sheet.append_row(['user_id', 'service', 'date', 'time', 'status'])
            print("Заголовки додано до таблиці")
    except Exception as e:
        print(f"Помилка ініціалізації: {e}")

init_sheet()  # Виконуємо ініціалізацію при запуску

# --- КОНФІГУРАЦІЯ ПОСЛУГ ТА РОБОЧИХ ГОДИН ---
SERVICES = {
    'Стрижка': 60,      # Послуга: тривалість у хвилинах
    'Фарбування': 120, 
    'Манікюр': 90, 
    'Педікюр': 30
}

WORK_HOURS = {
    'start': 9,   # Робочий день починається о 9:00
    'end': 20     # Робочий день закінчується о 20:00
}

# --- СЛОВНИК ДЛЯ ЗБЕРЕЖЕННЯ СТАНІВ КОРИСТУВАЧІВ ---
# Зберігає проміжні дані під час процесу запису
user_states = {}

# ============================================================================
# ФУНКЦІЇ РОБОТИ З ДАНИМИ
# ============================================================================

def save_appointment(user_id, service, date, time_slot):
    """
    Зберігає новий запис у Google Sheets.
    
    Параметри:
        user_id: ID користувача Telegram
        service: Назва послуги
        date: Дата запису (формат: YYYY-MM-DD)
        time_slot: Час запису (формат: HH:MM)
    
    Повертає:
        True якщо успішно, False при помилці
    """
    try:
        # Додаємо новий рядок у таблицю
        sheet.append_row([str(user_id), service, date, time_slot, 'confirmed'])
        return True
    except Exception as e:
        print(f"Помилка збереження: {e}")
        return False

def get_user_appointments(user_id):
    """
    Отримує всі записи конкретного користувача.
    
    Параметри:
        user_id: ID користувача Telegram
    
    Повертає:
        Список словників з інформацією про записи
    """
    try:
        records = sheet.get_all_records()  # Отримуємо всі записи з таблиці
        user_appointments = []
        
        # Фільтруємо записи за user_id
        for i, rec in enumerate(records):
            if str(rec.get('user_id', '')) == str(user_id):
                user_appointments.append({
                    'row': i + 2,  # +2 бо: +1 заголовки, +1 індексація з 1
                    'service': rec.get('service', ''),
                    'date': rec.get('date', ''),
                    'time': rec.get('time', ''),
                    'status': rec.get('status', '')
                })
        return user_appointments
    except Exception as e:
        print(f"Помилка отримання записів: {e}")
        return []

def cancel_appointment_by_row(row_number):
    """
    Скасовує (видаляє) запис за номером рядка в таблиці.
    
    Параметри:
        row_number: Номер рядка в Google Sheets (починається з 1)
    
    Повертає:
        True якщо успішно, False при помилці
    """
    try:
        sheet.delete_rows(row_number)  # Видаляємо рядок з таблиці
        return True
    except Exception as e:
        print(f"Помилка скасування: {e}")
        return False

def check_conflict(date, time_slot):
    """
    Перевіряє чи зайнятий вказаний часовий слот.
    
    Параметри:
        date: Дата для перевірки
        time_slot: Час для перевірки
    
    Повертає:
        True якщо час зайнятий, False якщо вільний
    """
    try:
        records = sheet.get_all_records()
        # Перевіряємо чи є запис на цю дату та час
        for rec in records:
            if rec.get('date') == date and rec.get('time') == time_slot:
                return True  # Конфлікт знайдено
        return False  # Час вільний
    except Exception as e:
        print(f"Помилка перевірки конфлікту: {e}")
        return False

# ============================================================================
# СИСТЕМА НАГАДУВАНЬ
# ============================================================================

def send_reminder():
    """
    Відправляє нагадування користувачам за 24 години до їхнього запису.
    Виконується автоматично за розкладом.
    """
    try:
        records = sheet.get_all_records()  # Отримуємо всі записи
        now = datetime.now()  # Поточний час
        
        for rec in records:
            try:
                # Перетворюємо дату та час запису в datetime об'єкт
                appt_time = datetime.strptime(
                    f"{rec.get('date', '')} {rec.get('time', '')}", 
                    "%Y-%m-%d %H:%M"
                )
                
                # Рахуємо різницю в секундах між зараз та записом
                time_diff = (appt_time - now).total_seconds()
                
                # Якщо до запису залишилось 23-25 годин - відправляємо нагадування
                if 23 * 3600 <= time_diff <= 25 * 3600:
                    user_id = rec.get('user_id', '')
                    if user_id:
                        bot.send_message(
                            int(user_id), 
                            f"🔔 Нагадування: {rec.get('service', '')} завтра о "
                            f"{rec.get('time', '')} ({rec.get('date', '')})"
                        )
            except (ValueError, TypeError) as e:
                # Пропускаємо некоректні записи
                print(f"Пропущено некоректний запис: {e}")
                pass
    except Exception as e:
        print(f"Помилка відправки нагадувань: {e}")

def run_scheduler():
    """
    Запускає планувальник завдань у фоновому режимі.
    Перевіряє записи щодня о 10:00 та відправляє нагадування.
    """
    schedule.every().day.at("10:00").do(send_reminder)  # Щоденна перевірка
    while True:
        schedule.run_pending()  # Виконуємо заплановані завдання
        time.sleep(60)  # Перевіряємо кожну хвилину

# Запускаємо планувальник у окремому потоці (не блокує основний код)
threading.Thread(target=run_scheduler, daemon=True).start()

# ============================================================================
# ОБРОБНИКИ КОМАНД БОТА
# ============================================================================

@bot.message_handler(commands=['start'])
def start(message):
    """
    Обробник команди /start - запускає бота та показує меню послуг.
    """
    # Створюємо клавіатуру з кнопками послуг
    markup = types.ReplyKeyboardMarkup(resize_keyboard=True)
    
    # Додаємо кнопку для кожної послуги
    for service in SERVICES:
        markup.add(types.KeyboardButton(service))
    
    # Додаємо кнопку для скасування запису
    markup.add(types.KeyboardButton("Скасувати запис"))
    
    # Відправляємо привітання з клавіатурою
    bot.send_message(
        message.chat.id, 
        "👋 Вітаю! Оберіть послугу або скасуйте запис:", 
        reply_markup=markup
    )
    
    # Зберігаємо стан користувача (крок: вибір послуги)
    user_states[message.from_user.id] = {'step': 'service'}

@bot.message_handler(func=lambda m: m.text in SERVICES or m.text == "Скасувати запис")
def handle_service(message):
    """
    Обробляє вибір послуги або запит на скасування.
    
    Якщо обрано послугу - показує календар дат.
    Якщо "Скасувати запис" - показує список записів для скасування.
    """
    user_id = message.from_user.id
    
    # Ініціалізуємо стан якщо його немає
    if user_id not in user_states:
        user_states[user_id] = {'step': 'service'}
    
    # --- ЛОГІКА СКАСУВАННЯ ЗАПИСУ ---
    if message.text == "Скасувати запис":
        # Отримуємо всі записи користувача
        appointments = get_user_appointments(user_id)
        
        # Якщо записів немає
        if not appointments:
            bot.send_message(user_id, "❌ У вас немає активних записів")
            if user_id in user_states:
                del user_states[user_id]
            return
        
        # Якщо тільки один запис - скасовуємо його одразу
        if len(appointments) == 1:
            appt = appointments[0]
            if cancel_appointment_by_row(appt['row']):
                bot.send_message(
                    user_id, 
                    f"✅ Запис скасовано:\n\n"
                    f"📋 {appt['service']}\n"
                    f"📅 {appt['date']}\n"
                    f"🕐 {appt['time']}"
                )
            else:
                bot.send_message(user_id, "❌ Помилка при скасуванні запису")
            if user_id in user_states:
                del user_states[user_id]
            return
        
        # Якщо кілька записів - показуємо список з кнопками
        markup = types.InlineKeyboardMarkup()
        for appt in appointments:
            button_text = f"❌ {appt['service']} - {appt['date']} {appt['time']}"
            callback_data = f"cancel_{appt['row']}"  # Зберігаємо номер рядка
            markup.row(types.InlineKeyboardButton(button_text, callback_data=callback_data))
        
        bot.send_message(
            user_id, 
            "🗑 Оберіть який запис скасувати:", 
            reply_markup=markup
        )
        user_states[user_id]['step'] = 'cancel'
        return
    
    # --- ЛОГІКА ВИБОРУ ПОСЛУГИ ---
    user_states[user_id]['service'] = message.text  # Зберігаємо обрану послугу
    markup = types.InlineKeyboardMarkup()
    
    # Створюємо кнопки для наступних 7 днів
    for i in range(7):
        date = (datetime.now() + timedelta(days=i + 1)).strftime("%Y-%m-%d")
        day_name = (datetime.now() + timedelta(days=i + 1)).strftime("%A")
        markup.row(types.InlineKeyboardButton(
            f"{date} ({day_name})", 
            callback_data=f"date_{date}"
        ))
    
    bot.send_message(user_id, "📅 Оберіть дату:", reply_markup=markup)
    user_states[user_id]['step'] = 'date'  # Переходимо до вибору дати

# ============================================================================
# ОБРОБНИКИ CALLBACK (INLINE КНОПОК)
# ============================================================================

@bot.callback_query_handler(func=lambda call: call.data.startswith('cancel_'))
def handle_cancel(call):
    """
    Обробляє скасування конкретного запису за номером рядка.
    Викликається при натисканні inline кнопки скасування.
    """
    user_id = call.from_user.id
    row_number = int(call.data.split('_')[1])  # Витягуємо номер рядка з callback_data
    
    try:
        # Отримуємо інформацію про запис перед видаленням
        all_records = sheet.get_all_records()
        cancelled_appt = None
        
        # Шукаємо запис за номером рядка
        for i, rec in enumerate(all_records):
            if i + 2 == row_number:  # +2 через заголовки
                cancelled_appt = rec
                break
        
        # Видаляємо запис
        if cancel_appointment_by_row(row_number):
            # Оновлюємо повідомлення з деталями скасованого запису
            if cancelled_appt:
                bot.edit_message_text(
                    f"✅ Запис скасовано:\n\n"
                    f"📋 {cancelled_appt.get('service', '')}\n"
                    f"📅 {cancelled_appt.get('date', '')}\n"
                    f"🕐 {cancelled_appt.get('time', '')}",
                    call.message.chat.id,
                    call.message.message_id
                )
            else:
                bot.edit_message_text(
                    "✅ Запис скасовано",
                    call.message.chat.id,
                    call.message.message_id
                )
            bot.answer_callback_query(call.id, "Запис скасовано!")
        else:
            bot.answer_callback_query(call.id, "❌ Помилка при скасуванні")
            bot.send_message(user_id, "❌ Помилка при скасуванні запису")
        
        # Очищаємо стан користувача
        if user_id in user_states:
            del user_states[user_id]
            
    except Exception as e:
        print(f"Помилка обробки скасування: {e}")
        bot.answer_callback_query(call.id, "Помилка!")
        bot.send_message(user_id, "❌ Помилка при скасуванні запису")

@bot.callback_query_handler(func=lambda call: call.data.startswith('date_'))
def choose_time(call):
    """
    Показує доступні часові слоти для обраної дати.
    Викликається при виборі дати з календаря.
    """
    date = call.data.split('_')[1]  # Витягуємо дату з callback_data
    user_id = call.from_user.id
    
    # Ініціалізуємо стан якщо його немає
    if user_id not in user_states:
        user_states[user_id] = {}
    
    # Зберігаємо обрану дату
    user_states[user_id]['date'] = date
    user_states[user_id]['step'] = 'time'
    
    markup = types.InlineKeyboardMarkup()
    available_slots = []
    
    # Генеруємо часові слоти з 9:00 до 20:00
    for h in range(WORK_HOURS['start'], WORK_HOURS['end']):
        time_slot = f"{h:02d}:00"
        
        # Перевіряємо чи час не зайнятий
        if not check_conflict(date, time_slot):
            available_slots.append(time_slot)
            markup.row(types.InlineKeyboardButton(
                f"🕐 {time_slot}", 
                callback_data=f"time_{date}_{time_slot}"
            ))
    
    # Якщо є вільні слоти - показуємо їх
    if available_slots:
        bot.edit_message_text(
            "⏰ Оберіть час:", 
            call.message.chat.id, 
            call.message.message_id, 
            reply_markup=markup
        )
    else:
        # Якщо всі слоти зайняті
        bot.send_message(user_id, "❌ На обрану дату немає вільних слотів. Оберіть іншу дату.")
        bot.answer_callback_query(call.id, "Немає вільних слотів")

@bot.callback_query_handler(func=lambda call: call.data.startswith('time_'))
def confirm(call):
    """
    Підтверджує та зберігає запис у Google Sheets.
    Викликається при виборі часу.
    """
    parts = call.data.split('_')
    
    # Перевіряємо коректність даних
    if len(parts) < 3:
        bot.answer_callback_query(call.id, "Помилка обробки даних")
        return
    
    date, time_slot = parts[1], parts[2]  # Витягуємо дату та час
    user_id = call.from_user.id
    
    # Перевіряємо чи є збережена послуга
    if user_id not in user_states or 'service' not in user_states[user_id]:
        bot.send_message(user_id, "❌ Спочатку оберіть послугу через /start")
        return
    
    state = user_states[user_id]
    service = state['service']
    
    # Фінальна перевірка на конфлікт (на випадок одночасних записів)
    if check_conflict(date, time_slot):
        bot.answer_callback_query(call.id, "Цей час вже зайнято!")
        bot.send_message(user_id, "❌ Цей час вже зайнято. Оберіть інший час.")
        return
    
    # Зберігаємо запис
    if save_appointment(user_id, service, date, time_slot):
        # Відправляємо підтвердження
        bot.send_message(
            user_id, 
            f"✅ Запис підтверджено!\n\n"
            f"📋 Послуга: {service}\n"
            f"📅 Дата: {date}\n"
            f"🕐 Час: {time_slot}\n\n"
            f"Ви отримаєте нагадування за 24 години до візиту."
        )
        bot.answer_callback_query(call.id, "Запис успішний!")
        del user_states[user_id]  # Очищаємо стан
    else:
        bot.send_message(user_id, "❌ Помилка при збереженні. Спробуйте ще раз.")
        bot.answer_callback_query(call.id, "Помилка!")

# ============================================================================
# ДОДАТКОВІ КОМАНДИ
# ============================================================================

@bot.message_handler(commands=['help'])
def help_command(message):
    """
    Показує довідку з доступними командами та інструкціями.
    """
    help_text = """
🤖 Доступні команди:

/start - Почати роботу з ботом
/myappointments - Переглянути мої записи
/help - Показати це повідомлення

📋 Як користуватися:
1. Натисніть /start
2. Оберіть послугу
3. Виберіть дату
4. Виберіть час
5. Підтвердіть запис

Для скасування запису натисніть кнопку "Скасувати запис"
    """
    bot.send_message(message.chat.id, help_text)

@bot.message_handler(commands=['myappointments'])
def my_appointments(message):
    """
    Показує всі активні записи користувача.
    """
    user_id = message.from_user.id
    appointments = get_user_appointments(user_id)
    
    # Якщо записів немає
    if not appointments:
        bot.send_message(user_id, "❌ У вас немає активних записів")
        return
    
    # Формуємо текст зі списком записів
    text = "📋 Ваші записи:\n\n"
    for i, appt in enumerate(appointments, 1):
        text += f"{i}. {appt['service']}\n"
        text += f"   📅 {appt['date']}\n"
        text += f"   🕐 {appt['time']}\n"
        text += f"   ✅ {appt['status']}\n\n"
    
    text += "Для скасування використайте кнопку 'Скасувати запис'"
    bot.send_message(user_id, text)

# ============================================================================
# ЗАПУСК БОТА
# ============================================================================

print("🤖 Бот запущено...")
print("📊 Підключено до Google Sheets")
print("🔔 Планувальник нагадувань активний")
print("⏳ Очікування повідомлень...\n")

# Запускаємо бота (безкінечний цикл обробки повідомлень)
bot.polling(none_stop=True)`
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(botCode).then(() => {
      setCopySuccess("Код скопійовано ✅");
      setTimeout(() => setCopySuccess(""), 2000);
    });
  };
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">Приклад 4: Telegram-бот для запису клієнтів (складніший, потрібні мінімальні навички роботи з терміналом, а для постійної роботи бота вміння запустити код на сервері )</h2>
        <p className="chapter__text">
          Цей приклад складніший, тут потрібен сервер або ПК, щоб бот працював постійно. Він інтегрується з Google Sheets, надсилає нагадування, дозволяє скасовувати записи та оптимізує діалог.
        </p>

        <div className="example-box">
          <ol>
            <li>
              <b>Створення Google Sheet:</b><br />
              - Створи новий Sheet із колонками: <code>user_id | service | date | time | status</code>.<br />
              - Назви лист, наприклад <code>Appointments</code>.
            </li>

            <li>
              <b>Створення Service Account у Google Cloud:</b>
              <ol>
                <li>Перейди на <a href="https://console.cloud.google.com/" target="_blank">Google Cloud Console</a>.</li>
                <li>Створи новий проєкт (Select a project → New Project) та дай йому назву, наприклад <code>TelegramBotProject</code>.</li>
                <li>У лівому меню знайди <b>IAM & Admin → Service Accounts</b> → натисни <b>Create Service Account</b>.</li>
                <li>Вкажи ім’я (наприклад <code>telegram-bot-sa</code>) та опис, натисни <b>Create</b>.</li>
                <li>Додай роль <b>Project → Editor</b> для доступу до Google Sheets.</li>
                <li>Після створення натисни <b>Manage Keys → Add Key → Create New Key → JSON</b>.</li>
                <li>Файл <code>credentials.json</code> завантажиться на твій комп’ютер. Перемісти його у папку з ботом.</li>
              </ol>
            </li>

            <li>
              <b>Надання доступу Google Sheet для Service Account:</b><br />
              - Відкрий Sheet → натисни <b>Share</b> → введи email свого Service Account (виглядає як <code>telegram-bot-sa@project-id.iam.gserviceaccount.com</code>) → дай права Editor → натисни <b>Send</b>.
            </li>

            <li>
              <b>Встановлення Python та бібліотек:</b><br />
              - Переконайся, що Python встановлений. <br />
              - У терміналі виконай: <code>pip install pyTelegramBotAPI gspread oauth2client schedule</code>.
            </li>
            <li>В коді заміни ці дані на свої дані </li>
            <ul>
              <li>BOT_TOKEN = 'токен'</li>
              <li>SHEET_ID = 'ID таблиці береться з адресного рядка https://docs.google.com/spreadsheets/d/<strong>1GfqyDW9MVD415LUUS2cJ5z4n_gIEV1C-fdcZmfxTsMI</strong>/edit?gid=0#gid=0'</li>
              <li>CREDENTIALS_FILE = 'credentials.json'</li>
            </ul>

            <li>
              <b>Код бота (bot.py):</b>
              <div className="code-container">
                <pre><code>{botCode}</code></pre>
                <button onClick={copyToClipboard}>Скопіювати код</button>
                {copySuccess && <span className="copy-success">{copySuccess}</span>}
              </div>

            </li>

            <li>
              <b>Запуск бота:</b><br />
              <p>- Перейдіть за посиланням:  <a
                href="https://console.developers.google.com/apis/api/sheets.googleapis.com/overview?project=640239159783"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Cloud Console
              </a></p>
              <p>- Натисніть "Enable" для Sheets API.</p>
              - Відкрий термінал у папці з файлом <code>bot.py</code>.<br />
              - Виконай команду: <code>python bot.py</code>. Бот запуститься онлайн.
            </li>

            <li>
              <b>Тестування:</b><br />
              - В Telegram відправ <code>/start</code>.<br />
              - Обери послугу → дату → час.<br />
              - Натисни "Скасувати запис", щоб перевірити функцію.<br />
              - Перевір нагадування та Google Sheet.
            </li>

            <li>
              <b>Додавання в портфоліо:</b><br />
              - Скріни Telegram-бота + Google Sheet.<br />
              - Короткий опис: "Telegram-бот для запису клієнтів, інтеграція з Google Sheets, нагадування, скасування записів, оптимізація діалогів."
            </li>
                  </ol>
                  <div className="portfolio">
                      <a href="/public/telegr.jpg" target="_blank" rel="noopener noreferrer">
                          <img src="/public/telegr.jpg" alt="Telegram" />
                      </a>
                  </div>
              </div>
              
           
      </div>
    </section>
  );
};

export default ChapterExample4;
