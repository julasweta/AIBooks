import "../styles.scss";

const Chapter8 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">
        <h2 className="chapter__title">
          8. Scaling Income and Repeat Sales
        </h2>

        <p className="chapter__text">
          Once you have your first clients, the next step is to increase revenue without constantly searching for new clients.
          The key here is consistency and offering additional value.
        </p>

        <h3 className="chapter__subtitle">Step 1: Automated Service Packages</h3>
        <p>Create 2–3 ready-made packages so clients can easily choose:</p>

        <table className="chapter-table chapter-table--2col">
          <thead>
            <tr>
              <th>Package</th>
              <th>Includes</th>
              <th>Approx. Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Basic</td>
              <td>5 AI posts per week</td>
              <td>$20–30</td>
            </tr>
            <tr>
              <td>Standard</td>
              <td>10 posts + AI booking bot</td>
              <td>$50–70</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>15 posts + bot + analytics report</td>
              <td>$100</td>
            </tr>
          </tbody>
        </table>

        <h3 className="chapter__subtitle">Step 2: Offer Additional Services</h3>
        <div className="msg-box">
          <ul>
            <li>AI banners, social media graphics, stories</li>
            <li>Chatbots for booking, reminders, surveys</li>
            <li>Automated content calendar for a month</li>
            <li>Promotional texts, product descriptions</li>
          </ul>
        </div>
        <p className="chapter__text">
          🔹 Idea: the client already trusts you → quick upsell.
        </p>

        <h4 className="chapter__smalltitle">💡 Tips for Efficiency</h4>
        <ul className="chapter-list">
          <li>Use tables and checklists to track all clients and their packages</li>
          <li>Regularly update AI models and templates → faster results for clients</li>
          <li>Focus on long-term relationships, not just one-time revenue</li>
        </ul>

        <p className="chapter__text">
          🎯 Result: after 1–2 months of active work, you can move from $20–50/day to $50–150/day without seeking new clients constantly.
        </p>
      </div>
    </section>
  );
};

export default Chapter8;
