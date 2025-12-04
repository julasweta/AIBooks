import "../styles.scss";

const ChapterPrompts = () => {
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">Ready-to-Use AI Prompts</h2>
        <p className="chapter__text">
          Here are ready-to-use prompts for three types of AI projects: chatbot, content generation, and voiceover/audio. Both English and localized prompts included for easy adaptation.
        </p>

        {/* PROMPT 1: CHATBOT */}
        <h3 className="chapter__subtitle">1️⃣ AI Chatbot for Client Booking</h3>
        <p className="chapter__text">
          <b>Platforms:</b> Telegram, ManyChat, Tidio<br />
          <b>Goal:</b> Automate client booking, integrate with Google Sheets / CRM, send reminders and confirmations.<br />
          <b>How to use:</b>
          <br />1. Insert prompt into ChatGPT/OpenAI or similar AI to generate dialogue and messages.
          <br />2. Create a bot in Telegram via BotFather, or use ManyChat/Tidio.
          <br />3. Add blocks and messages according to the generated scenario.
          <br />4. Integrate with Google Sheets for data storage and set up reminders.
        </p>
        <div className="prompt-box">
          <p><b>Localized:</b></p>
          <pre>
            Create a chatbot that:
            - Accepts service bookings.
            - Saves client data in a spreadsheet.
            - Sends confirmations to clients.
            - Sends reminders 24 hours before the appointment.
            - Handles schedule conflicts.
            - Optimizes dialogue flow for maximum conversion.
          </pre>
          <p><b>English:</b></p>
          <pre>
            Create a Telegram chatbot that:
            - Books appointments for a service business.
            - Saves data to Google Sheets.
            - Sends confirmation messages to clients.
            - Sends reminders 24 hours before the appointment.
            - Handles time conflicts and availability.
            - Optimizes dialogue flow for high conversion.
          </pre>
        </div>

        {/* PROMPT 2: CONTENT GENERATION */}
        <h3 className="chapter__subtitle">2️⃣ Content Generation for Social Media</h3>
        <p className="chapter__text">
          <b>Platforms:</b> ChatGPT, Canva AI, MidJourney<br />
          <b>Goal:</b> Generate text and visuals for social media posts.<br />
          <b>How to use:</b>
          <br />1. Insert prompt into ChatGPT to generate text.
          <br />2. Use Canva AI or MidJourney for visuals.
          <br />3. Combine text + images and schedule posts via Buffer/Metricool.
        </p>
        <div className="prompt-box">
          <p><b>Localized:</b></p>
          <pre>
            Write 5 short posts for a coffee shop:
            - Friendly tone, emojis
            - 2-3 sentences each
            - Caption under 150 characters
          </pre>
          <p><b>English:</b></p>
          <pre>
            Write 5 short Instagram posts for a coffee shop:
            - Friendly tone, emojis
            - 2-3 sentences each
            - Prepare a caption under 150 characters for each post
          </pre>
        </div>

        {/* PROMPT 3: VOICEOVER / AUDIO */}
        <h3 className="chapter__subtitle">3️⃣ Voiceover / Audio Content</h3>
        <p className="chapter__text">
          <b>Platforms:</b> ElevenLabs, Murf, Descript<br />
          <b>Goal:</b> Create promotional audio, ads, or voiceovers for social media.<br />
          <b>How to use:</b>
          <br />1. Insert prompt into the voice synthesis platform.
          <br />2. Choose voice style and language.
          <br />3. Download audio and add it to video or ads.
        </p>
        <div className="prompt-box">
          <p><b>Localized:</b></p>
          <pre>
            Create a 30-second friendly voiceover:
            - Highlight products, services, or promotions
            - Energetic style
            - Suitable for social media ads
          </pre>
          <p><b>English:</b></p>
          <pre>
            Create a 30-second audio file in a friendly voice for social media:
            - Highlight products or promotions
            - Energetic style
            - Ready to add to video or ads
          </pre>
        </div>

        <p className="chapter__text">
          🔹 Use these prompts according to platform and project type. They are ready to copy and implement, and instructions help integrate results into working tools.
        </p>

      </div>
    </section>
  );
};

export default ChapterPrompts;
