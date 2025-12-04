import "../styles.scss";

const Chapter10 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">
          10. Frequently Asked Questions
        </h2>

        <div className="faq-section">

          {/* Question 1 */}
          <div className="faq-item">
            <h4 className="faq-question">1️⃣ Why doesn’t the client do it themselves?</h4>
            <p className="faq-answer">
              Time & effort: What might take a business owner 5 minutes can take hours to properly set up a bot, integrations, and workflows.<br />
              Quality & logic: Owners often implement basic setups but don’t optimize scenarios.<br />
              Integrations: Data storage, reminders, and notifications require experience.
            </p>
          </div>

          {/* Question 2 */}
          <div className="faq-item">
            <h4 className="faq-question">2️⃣ What if the bot has more contacts than the free plan allows?</h4>
            <p className="faq-answer">
              Start with a demo on the free plan (e.g., up to 100 contacts).<br />
              Then the client can upgrade → you add full setup and automation.<br />
              Alternative: Google Forms + Telegram bot via Make (Integromat) for larger audiences.
            </p>
          </div>

          {/* Question 3 */}
          <div className="faq-item">
            <h4 className="faq-question">3️⃣ How to set up free automation via Google Forms + Telegram Bot</h4>

            <div className="steps-box">
              <ol>
                <li><b>Create a Google Form:</b> add fields: Name, Phone, Email, Comment. Copy the link.</li>
                <li><b>Create a Telegram bot:</b> via @BotFather, get the API token.</li>
                <li><b>Sign up in Make (Integromat):</b> free up to 1,000 operations/month.</li>
                <li><b>Connect Google Forms:</b> trigger "watch rows" → responses go automatically to Google Sheets.</li>
                <li><b>Connect Telegram:</b> "Send a Message" → paste token → specify recipient and message text.</li>
                <li><b>Test the scenario:</b> submit test data via the form → check messages.</li>
                <li><b>Activate:</b> turn ON → data automatically sent to Telegram.</li>
              </ol>
            </div>

            <p className="faq-result">
              ✅ <b>Result:</b> The client receives unlimited user data for free. Portfolio is ready, and you can add integrations with Google Sheets → Email, Calendar, CRM.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Chapter10;
