import "../styles.scss";

const Chapter6 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">
        <h2 className="chapter__title">
          6. Building a Portfolio Even If You Haven’t Sold Anything Yet
        </h2>

        <p className="chapter__text">
          One of the biggest beginner problems is: what to show if you have no cases?
          Good news → in the AI services field, you can create a portfolio in 1–3 days without a single client.
        </p>

        <h3 className="chapter__subtitle">1) Choose 1–2 Niches</h3>
        <p>Not everything at once. Start with the simplest for a quick start. Recommended options:</p>
        <ul className="chapter-list">
          <li>Nail / Beauty Services (easy, visual content)</li>
          <li>Handmade / Fashion (plenty of examples)</li>
          <li>Tutoring / Online Courses (need learning materials and bots)</li>
        </ul>
        <p>Choose where it’s easy to find reference materials and images.</p>

        <h3 className="chapter__subtitle">2) Create 3–4 Demo Projects</h3>
        <p>Planning table:</p>
        <table className="chapter-table chapter-table--2col">
          <thead>
            <tr>
              <th>Project Type</th>
              <th>What to Create</th>
              <th>Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>AI Content</td>
              <td>10–20 posts with images</td>
              <td>2–5 hours</td>
            </tr>
            <tr>
              <td>Banners / Ads</td>
              <td>5–10 styled banners</td>
              <td>1–3 hours</td>
            </tr>
            <tr>
              <td>Chat Bot</td>
              <td>Simple Telegram FAQ bot</td>
              <td>30 min – 2 hours</td>
            </tr>
            <tr>
              <td>PDF Guide / Learning Material</td>
              <td>3–5 pages of instructional content</td>
              <td>2–4 hours</td>
            </tr>
          </tbody>
        </table>

        <h3 className="chapter__subtitle">3) Present Portfolio as a Mini Landing Page</h3>
        <p>
          Even a simple one-page website looks 10x more professional than a Google Doc.
          You can use no-code platforms:
        </p>
        <div className="portfolio-blocks">
          <div className="portfolio-block">
            <b>Notion</b>
            <p>Simple drag & drop, create a portfolio page in minutes</p>
          </div>
          <div className="portfolio-block">
            <b>Tilda (Free Plan)</b>
            <p>Ready blocks and templates for fast launch</p>
          </div>
          <div className="portfolio-block">
            <b>Canva Sites</b>
            <p>Easy portfolio creation with designs, buttons, and images</p>
          </div>
          <div className="portfolio-block">
            <b>Carrd.co</b>
            <p>Simple “I build AI content” page with examples, no coding required</p>
          </div>
        </div>

        <h3 className="chapter__subtitle">4) What Should Be in Your Portfolio</h3>
        <ul className="chapter-list">
          <li>Who you are and what you do (1 paragraph, not a resume)</li>
          <li>3 demo projects → images + short result description</li>
          <li>Price / “Ask me — I’ll choose a package” formula</li>
          <li>Contacts (Telegram, Email)</li>
          <li>Button: “Get a Free Sample”</li>
        </ul>
        <p className="chapter__text">
          🎁 Free samples work wonders — 2 posts, 3 images, or 1 banner can help close a client.
        </p>

        <h3 className="chapter__subtitle">🔥 Mini Portfolio Template</h3>
        <div className="msg-box">
          <p>
            I create AI content, images, ad banners, and chat bots for [niche].<br />
            I help businesses save time, update content, and attract clients.<br />
            Below are examples of my work and collaboration formats.<br />
            📌 “Let me make a free sample — within 24 hours.”
          </p>
          <p>
            → This phrase increases response rates by 3–8x.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Chapter6;
