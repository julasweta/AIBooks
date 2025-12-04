import "../styles.scss";

const Chapter3 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">
          3. How to Choose a Niche to Earn Your First Money This Week
        </h2>

        <p className="chapter__text">
          Most people don’t earn with AI because they spread themselves too thin:
          doing logos, texts, voiceovers, and guides all at once. That doesn’t work.
          Choose one niche → grow in it → scale. Below is the algorithm used by those
          who actually make money.
        </p>

        {/* 3.1 */}
        <h3 className="chapter__subtitle">🔥 Step 1. Choose a format that resonates with you</h3>

        <p className="chapter__text">
          Work in a field that doesn’t feel like daily suffering.
          Evaluate what feels closer to you:
        </p>

        <div className="chapter-table chapter-table--2col">
          <div className="chapter-table__row chapter-table__head">
            <div>If You Enjoy...</div>
            <div>Choose Direction</div>
          </div>

          <div className="chapter-table__row">
            <div>Writing, formulating ideas</div>
            <div>Text + Copywriting</div>
          </div>

          <div className="chapter-table__row">
            <div>Visual, style</div>
            <div>Design + AI Graphics</div>
          </div>

          <div className="chapter-table__row">
            <div>Programming, projects</div>
            <div>AI Bots, Automation</div>
          </div>

          <div className="chapter-table__row">
            <div>Do once, sell many</div>
            <div>Digital Products</div>
          </div>
        </div>

        {/* 3.2 */}
        <h3 className="chapter__subtitle">✍️ Step 2. Form a Simple Service (Specific Result)</h3>

        <p className="chapter__text">
          ❌ Not "I generate texts or images"<br />
          ✔️ But "I create X that gives result Y to the client"
        </p>

        <div className="chapter-table chapter-table--2col">
          <div className="chapter-table__row chapter-table__head">
            <div>Poor</div>
            <div>Good</div>
          </div>

          <div className="chapter-table__row">
            <div>Making AI images</div>
            <div>Creating Instagram designs that increase engagement</div>
          </div>

          <div className="chapter-table__row">
            <div>Writing texts</div>
            <div>Generating SEO articles that drive store traffic</div>
          </div>

          <div className="chapter-table__row">
            <div>Making a bot</div>
            <div>Setting up an AI bot that answers clients 24/7</div>
          </div>
        </div>

        {/* 3.3 */}
        <h3 className="chapter__subtitle">💡 Step 3. Choose One Simple Microproduct and Start</h3>

        <p className="chapter__text">
          You don’t need a course, experience, or portfolio — just start small.
        </p>

        <h4 className="chapter__smalltitle">🔥 Content</h4>
        <ul className="chapter-list">
          <li>5 high-converting Instagram posts for a store</li>
          <li>SEO descriptions for 10 products</li>
        </ul>

        <h4 className="chapter__smalltitle">🎨 Design</h4>
        <ul className="chapter-list">
          <li>10 covers for reels</li>
          <li>3 ad templates in Canva</li>
        </ul>

        <h4 className="chapter__smalltitle">🤖 AI Bots</h4>
        <ul className="chapter-list">
          <li>Simple FAQ bot for website/store</li>
          <li>Auto-responses in Telegram</li>
        </ul>

        <h4 className="chapter__smalltitle">📦 Digital Products</h4>
        <ul className="chapter-list">
          <li>PDF Guide “30 Days of Store Posts”</li>
          <li>AI Prompt Pack for Content</li>
        </ul>

        {/* 3.4 */}
        <h3 className="chapter__subtitle">🚀 Step 4. Set a Real 7-Day Plan</h3>

        <div className="chapter-list bold-list">
          <li>1 service</li>
          <li>+ 5 test clients</li>
          <li>+ 10 proposals daily</li>
          <li>= first $30–$100</li>
        </div>

        <p className="chapter__text">
          Don’t wait — test. Improve the product from the first feedback →
          grow → increase the price.
        </p>

      </div>
    </section>
  );
};

export default Chapter3;
