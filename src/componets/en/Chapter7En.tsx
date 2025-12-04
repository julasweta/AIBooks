import "../styles.scss";

const Chapter7 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">
        <h2 className="chapter__title">
          7. How to Find Your First Clients and Get a Response
        </h2>

        <p className="chapter__text">
          The beginning is the hardest — but there are no secrets, only a systematic approach.
          Goal: land 1–2 first deals without prior experience.
        </p>

        <h3 className="chapter__subtitle">Step 1: Identify Your Target Audience</h3>
        <p>Start with small businesses or individual creators:</p>

        <table className="chapter-table chapter-table--2col">
          <thead>
            <tr>
              <th>Niche</th>
              <th>Where to Look</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Nail / Beauty Services</td>
              <td>Instagram, TikTok, local salon pages</td>
            </tr>
            <tr>
              <td>Handmade / Fashion</td>
              <td>Etsy, Instagram, Facebook Marketplace</td>
            </tr>
            <tr>
              <td>Tutors / Online Courses</td>
              <td>Instagram, local Facebook/Discord groups, Udemy / Teachable</td>
            </tr>
            <tr>
              <td>Cafes / Restaurants</td>
              <td>Google Maps, Instagram, Yelp, local pages</td>
            </tr>
          </tbody>
        </table>

        <h3 className="chapter__subtitle">Step 2: What to Do After a Response</h3>
        <div className="msg-box">
          <ul>
            <li>Send a free sample (1–2 posts or a banner)</li>
            <li>If the client approves → offer a service package with pricing</li>
            <li>
              Arrange payment via PayPal, Venmo, Revolut, or bank transfer — main thing is fast and secure
            </li>
          </ul>
        </div>

        <h4 className="chapter__smalltitle">⚡ Psychology</h4>
        <p className="chapter__text">
          Clients value quick results and simplicity, not your certificates or years of experience.
        </p>
      </div>
    </section>
  );
};

export default Chapter7;
