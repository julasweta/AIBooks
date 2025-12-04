import ChapterExample4 from "./ChapterExample4En";
import "../styles.scss";

const Chapter9 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">
        <h2 className="chapter__title">
          9. Tools and Services for Automating AI Business
        </h2>

        <p className="chapter__text">
          To earn steadily without unnecessary manual operations, it is important to choose the right tools.
          Here we will divide them into categories.
        </p>

        {/* 1. Content Generation */}
        <h3 className="chapter__subtitle">1. Content Generation</h3>
        <p>For social media, descriptions, and text:</p>
        <table className="chapter-table chapter-table--3col">
          <thead>
            <tr>
              <th>Tool</th>
              <th>What it does</th>
              <th>Free Plan</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ChatGPT / OpenAI</td>
              <td>Generates texts, answers, scripts</td>
              <td>Yes, token limits apply</td>
            </tr>
            <tr>
              <td>Copy.ai</td>
              <td>Marketing texts, product descriptions</td>
              <td>Yes, limited number</td>
            </tr>
            <tr>
              <td>Writesonic</td>
              <td>Blogs, posts, emails</td>
              <td>Yes, up to 10 generations/day</td>
            </tr>
            <tr>
              <td>Canva AI</td>
              <td>AI banners, images, stories</td>
              <td>Yes, basic features</td>
            </tr>
          </tbody>
        </table>
        <p className="chapter__text">
          💡 Start with free plans and gradually upgrade to Pro if needed.
        </p>

        {/* 2. Chatbots and Automation */}
        <h3 className="chapter__subtitle">2. Chatbots and Automation</h3>
        <table className="chapter-table chapter-table--3col">
          <thead>
            <tr>
              <th>Tool</th>
              <th>What it does</th>
              <th>Features</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>ManyChat</td>
              <td>Chatbots for Facebook/Instagram</td>
              <td>Free plan up to 1k subscribers</td>
            </tr>
            <tr>
              <td>Tidio</td>
              <td>Website bots</td>
              <td>Free up to 100 contacts</td>
            </tr>
            <tr>
              <td>Botpress</td>
              <td>Custom AI bots</td>
              <td>Open-source, can be deployed on your server</td>
            </tr>
            <tr>
              <td>Dialogflow</td>
              <td>AI intent recognition</td>
              <td>Free plan for small projects</td>
            </tr>
          </tbody>
        </table>
        <p className="chapter__text">
          💡 Start with simple bots on ManyChat or Tidio, then switch to Botpress for customization.
        </p>

        {/* 3. Planning and Analytics */}
        <h3 className="chapter__subtitle">3. Planning and Analytics</h3>
        <ul className="chapter-list">
          <li>Trello / Notion — content planning, task tracking</li>
          <li>Metricool / Buffer — automated social media posting</li>
          <li>Google Analytics — track visits and AI service performance</li>
        </ul>

        {/* 4. Additional Income */}
        <h3 className="chapter__subtitle">4. Services for Additional Income</h3>
        <ul className="chapter-list">
          <li>Fiverr / Upwork / Etsy — sell ready-made AI templates, banners, bots</li>
          <li>Ko-fi / Gumroad — sell ready-made AI tools and content packages</li>
          <li>Telegram channels / chatbots — create subscriptions for weekly AI content</li>
        </ul>
        <p className="chapter__text">
          💡 Combine services — automate the process from generation to sales.
        </p>

        <h3 className="chapter__subtitle">Example 1: How to Create an AI Chatbot for Client Booking</h3>
        <div className="example-box">
          <ol>
            <li>
              <b>Select Tools and Register:</b>
              Choose <a href="https://app.landbot.io/" target="_blank">Landbot</a> – register via email or Google and confirm the account.
              Choose <a href="https://calendly.com/" target="_blank">Calendly</a> – free version allows basic events. After registration, add available booking slots.
            </li>
            <li>
              <b>Create a New Bot in Landbot:</b>
              Dashboard → "Bot Builder" → "Build Chatbot" → choose platform (Web / WhatsApp / Messenger) → "Build for me".
              In the description field, paste the AI prompt:
              <pre>
                Create a chatbot for online client booking at a beauty salon.
                Functionality:
                1. Greeting: short message "Hi! I will help you book a time."
                2. Service selection: buttons "Manicure", "Haircut", "I have a question."
                3. Collect client data: name, phone or email.
                4. Choose date and time via Calendly integration (insert event link).
                5. Booking confirmation: message "Thank you! Your booking has been successfully created."
                6. Logic between blocks: service selection → name → calendar → confirmation.
                7. Additional blocks: FAQ, cancel booking.
              </pre>
              After creation, edit/add/remove blocks as needed.
            </li>
            <li>
              <b>Configure Bot Blocks:</b>
              - Greeting: short message.
              - Service selection: buttons with options.
              - Collect client data: name, phone, or email.
              - Date and time selection via Calendly.
              - Booking confirmation: automatic message.
              Check block transition logic.
            </li>
            <li>
              <b>Integration to Website or Social Media:</b>
              - Landbot: "Share" → copy link or embed code.
              - Calendly: copy event link → insert into Landbot button for date selection.
              - Make sure the bot appears and responds to clicks.
            </li>
            <li>
              <b>Testing:</b>
              - Perform a test booking: select service → enter data → choose date → receive confirmation.
              - Verify messages arrive and all blocks work properly.
            </li>
            <li>
              <b>Portfolio:</b>
              - Screenshots of bot blocks and dialogues.
              - Short description: "AI chatbot created for automatic client booking. Used Landbot and Calendly, basic block logic, integration to website or Messenger/WhatsApp."
              - Add 1–2 examples of test bookings.
            </li>
          </ol>
          <div className="portfolio">
            <a href="/public/214525.png" target="_blank" rel="noopener noreferrer">
              <img src="/public/214525.png" alt="Email" />
            </a>

            <a href="/public/213137.png" target="_blank" rel="noopener noreferrer">
              <img src="/public/213137.png" alt="Landbot Diagram" />
            </a>

            <a href="/public/212952.png" target="_blank" rel="noopener noreferrer">
              <img src="/public/212952.png" alt="Calendly" />
            </a>
          </div>
        </div>

        <h3 className="chapter__subtitle">Example 2: Content Generator for Instagram or Social Media (Images + Text)</h3>
        <div className="example-box">
          <ol>
            <li>
              <b>Choose Tools:</b>
              - <b>ChatGPT / OpenAI</b> — for generating texts (posts, captions, product descriptions).
              - <b>Canva AI</b> or <b>MidJourney</b> — for generating images according to descriptions.
              - <b>Buffer / Metricool</b> — free plan for scheduling posts.
            </li>
            <li>
              <b>Create Texts in ChatGPT:</b>
              - Specify a topic, e.g., "5 Instagram posts about coffee and desserts."
              - Style: friendly tone, emojis, 2–3 sentences per post.
              - Save texts to file or Google Docs for later use.
            </li>
            <li>
              <b>Create Images in Canva AI / MidJourney:</b>
              - Canva: choose "Custom size" → create Instagram post (1080x1080px).
              - Insert description from ChatGPT as prompt for image generation.
              - MidJourney: `/imagine prompt: latte coffee in cozy cafe, warm colors, friendly style`.
              - Save all images to a folder for posts.
            </li>
            <li>
              <b>Combine Text and Images:</b>
              - In Canva, create a layout: add background/photo + text from ChatGPT.
              - Check font style, colors, logo if needed.
              - Export ready posts as PNG / JPG.
            </li>
            <li>
              <b>Testing and Scheduling:</b>
              - Register in Buffer or Metricool (free plan).
              - Create a posting calendar: add posts with texts and images.
              - Check how posts look on mobile and desktop.
              - Adjust text/images if needed.
            </li>
            <li>
              <b>Add to Portfolio:</b>
              - Screenshots of posts + texts.
              - Short description: "AI content for Instagram: 5 posts generated by ChatGPT + Canva AI, integrated into Buffer for scheduling."
              - Add examples of client-ready posts.
            </li>
          </ol>
        </div>

        <h3 className="chapter__subtitle">Example 3: Create Voiceover for Social Media Videos / Audio</h3>
        <div className="example-box">
          <ol>
            <li>
              <b>Choose Tool:</b>
              - <i>CapCut Voiceover</i> — fully free, easy to use.
              - <i>Pippit.ai</i> — free tier with quality voices.
              - <i>Fliki.ai</i> — free plan for short voiceovers.
              Choose one service and register if an account is required.
            </li>
            <li>
              <b>Prepare Text for Voiceover:</b>
              - Create a short script: 2–3 sentences per video scene.
              - You can use ChatGPT-generated texts, e.g., product descriptions or instructions.
              - Save texts to a file or Google Docs.
            </li>
            <li>
              <b>Create Audio:</b>
              - CapCut: open project → "Voiceover" → paste text → choose voice → "Generate".
              - Veed.io: "Text to Speech" → paste text → select voice and language → generate audio.
              - Check duration and quality.
            </li>
            <li>
              <b>Add Audio to Video:</b>
              - CapCut or Veed.io: add video (can be test video, black background or text slides).
              - Add voiceover → check sync.
              - Optionally add background music (free, copyright-free).
            </li>
            <li>
              <b>Export and Review:</b>
              - Export video as MP4.
              - Check on phone and desktop to ensure clear sound and readable text.
            </li>
            <li>
              <b>Portfolio:</b>
              - Project screenshots, script, audio/video files.
              - Short description: "Voiceover for social media: 30-second video with CapCut Voiceover. Used ready-made voices and short Instagram/TikTok script."
              - Optionally add 1–2 examples of different voices or styles.
            </li>
          </ol>
        </div>
        <ChapterExample4 />
      </div>
    </section>
  );
};

export default Chapter9;
