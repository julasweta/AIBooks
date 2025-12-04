import "../styles.scss";

const Chapter11 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">
          11. Your Value as a Service Provider
        </h2>

        <p className="chapter__text">
          Don’t limit yourself to just “creating a bot.” Your work is full business process automation:
        </p>

        <ul className="chapter-list">
          <li><b>Workflow setup:</b> the bot doesn’t just reply—it guides the client from inquiry to purchase.</li>
          <li><b>Integrations with other tools:</b> CRM, Telegram, Google Sheets, email campaigns, online calendars. The client gets a unified system, not scattered tools.</li>
          <li><b>Analytics & optimization:</b> set up statistics collection, reports, and notifications about key events. The client sees results, not just a bot.</li>
          <li><b>Business-specific personalization:</b> the bot adapts to the niche, communication style, and customer needs.</li>
        </ul>

        <h4 className="chapter__smalltitle">💡 Portfolio is Your Strength</h4>
        <ul className="chapter-list">
          <li>Show examples of successful bots, even using demo data.</li>
          <li>Highlight measurable results: number of requests processed, time saved for the owner, and conversion improvement.</li>
        </ul>

        <h4 className="chapter__smalltitle">🔑 Sell Results, Not a Bot</h4>
        <ul className="chapter-list">
          <li>“I set up automation so you can forget about manual bookings and losing clients.”</li>
          <li>“My bot can handle 100+ requests simultaneously, whereas doing it manually would take hours every day.”</li>
          <li>Emphasize time savings, cost reduction, and increased business efficiency.</li>
        </ul>

      </div>
    </section>
  );
};

export default Chapter11;
