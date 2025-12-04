import "../styles.scss";

const Chapter4 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">
        <h2 className="chapter__title">4. Where to Find Your First Clients and How to Write to Get Replies</h2>

        <p className="chapter__text">
          The biggest mistake beginners make is waiting for clients to come to them.
          Your first earnings come only through actively reaching out.
          Below are platforms that actually work, with ready-made texts for first contact.
        </p>

        {/* INSTAGRAM */}
        <h3 className="chapter__subtitle">1) Instagram — the fastest start</h3>
        <p>Especially effective for:</p>
        <ul className="chapter-list">
          <li>Local small businesses</li>
          <li>Beauty professionals</li>
          <li>Small brands under 20k followers</li>
        </ul>
        <p>Task: find the account → send a short proposal.</p>
        <div className="msg-box">
          <b>Message Template:</b>
          <p>
            Hi! I checked your profile — really nice style ❤️<br />
            I help businesses create AI content/bots/designs
            that save time and increase sales.<br />
            Want to try? I can make 2 free samples —
            if it fits, we can continue.
          </p>
        </div>

        {/* TELEGRAM → American equivalent */}
        <h3 className="chapter__subtitle">2) Online Business Communities — less competition</h3>
        <p>Where to join:</p>
        <ul className="chapter-list">
          <li>🔥 US Entrepreneurs / Small Business Owners</li>
          <li>🔥 Marketing / SMM / Business groups</li>
          <li>🔥 Freelance platforms: Upwork, Fiverr, Freelancer</li>
        </ul>
        <div className="msg-box">
          <b>Post Example:</b>
          <p>
            🟢 I create AI design/content/bots for small businesses<br />
            🔸 10 banners — $10<br />
            🔸 Content + 14 posts — $15<br />
            🔸 FAQ bot for requests — $15<br />
            I can make a free demo. DM me ✍️
          </p>
        </div>

        {/* OLX → Craigslist */}
        <h3 className="chapter__subtitle">3) Craigslist — underrated but works</h3>
        <div className="msg-box">
          <b>Ad Example:</b>
          <p>
            Need content/design/AI bot for your business?<br />
            I can deliver in 1–3 days. Free test work available.
          </p>
        </div>

        {/* REDDIT / FACEBOOK / LINKEDIN */}
        <h3 className="chapter__subtitle">4) Reddit, Facebook, LinkedIn</h3>
        <table className="chapter-table chapter-table--2col">
          <thead>
            <tr>
              <th>Platform</th>
              <th>What to Do</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Facebook</td>
              <td>Join US business / marketing / freelance groups</td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>Comment on posts + send proposals via DM</td>
            </tr>
            <tr>
              <td>Reddit</td>
              <td>Subreddits for small businesses, AI, freelancers</td>
            </tr>
          </tbody>
        </table>

        <h4 className="chapter__smalltitle">🔥 Formula that Almost Always Works:</h4>
        <ul className="chapter-list">
          <li>Identify the problem</li>
          <li>Offer a concrete solution</li>
          <li>Provide a risk-free test</li>
        </ul>

        <div className="msg-box">
          <b>Example:</b>
          <p>
            I see you have little video content. I can make an AI reel in your style.
            I’ll make the first version for free — show the result in 15 minutes.
          </p>
        </div>

        <p className="chapter__text">
          People don’t buy the service — they buy the result and the sense of security.
        </p>
      </div>
    </section>
  );
};

export default Chapter4;
