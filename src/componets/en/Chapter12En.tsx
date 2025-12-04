import "../styles.scss";

const Chapter12 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">
          12. How to Level Up Your Services and Earnings as a Freelancer
        </h2>

        <p className="chapter__text">
          Focus on three main areas: technical skills, business understanding, and marketing/sales. Here’s what to learn specifically:
        </p>

        <h2 className="chapter__smalltitle">1. Technical Skills & Tools</h2>
        <ul className="chapter-list">
          <li><b>APIs and Integrations:</b>
            <ul>
              <li>Connect bots to CRM, Google Sheets, Google Calendar, Telegram, Instagram, WhatsApp.</li>
              <li>Understand REST API and Webhooks.</li>
            </ul>
          </li>
          <li><b>No-code / Low-code Platforms:</b>
            <ul>
              <li>Make (Integromat), Zapier, Tally, Airtable — build complex automations without coding.</li>
            </ul>
          </li>
          <li><b>AI & NLP (Natural Language Processing):</b>
            <ul>
              <li>ChatGPT API or other LLMs for smarter bots.</li>
              <li>Text generation, customer request handling, message classification.</li>
            </ul>
          </li>
          <li><b>Front-end for Demos:</b>
            <ul>
              <li>Build a simple web interface for bot testing (React/TypeScript).</li>
            </ul>
          </li>
          <li><b>Backend & Databases:</b>
            <ul>
              <li>Nest.js / Node.js, PostgreSQL or Firebase to store client data and history.</li>
            </ul>
          </li>
          <li><b>Analytics & Data Visualization:</b>
            <ul>
              <li>Google Data Studio, Tableau, or Excel/Sheets integration to show results to clients.</li>
            </ul>
          </li>
        </ul>

        <h2 className="chapter__smalltitle">2. Marketing & Sales</h2>
        <ul className="chapter-list">
          <li><b>Compelling Portfolio:</b>
            <ul>
              <li>Real or demo projects with descriptions showing time/resources saved by the bot.</li>
              <li>Case studies: before/after using bots.</li>
            </ul>
          </li>
          <li><b>Client Communication:</b>
            <ul>
              <li>Sell “results,” not just technical services.</li>
              <li>Create proposals and demos that showcase the benefits.</li>
            </ul>
          </li>
          <li><b>Social Media & Freelance Platforms:</b>
            <ul>
              <li>LinkedIn, Upwork, Fiverr, Etsy — focus on international platforms.</li>
              <li>Share posts/case studies with AI bots to attract clients.</li>
            </ul>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Chapter12;
