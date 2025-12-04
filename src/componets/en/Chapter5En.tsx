import "../styles.scss";

const Chapter5 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">
        <h2 className="chapter__title">
          5. How to Build a Portfolio and Case Studies Even if You Haven’t Had Any Clients Yet
        </h2>

        <p className="chapter__text">
          90% of beginners don’t earn because they wait for a real order to build a portfolio.
          Pros do the opposite: they create cases → showcase them → get clients.
          You can assemble a portfolio in 2–3 days.
        </p>

        <h3 className="chapter__subtitle">
          🎯 Who to Sell to and What Exactly
        </h3>
        <p>Ready-made service list for each niche:</p>

        {/* 1. Dentistry */}
        <h4 className="chapter__smalltitle">1) Dentistry / Dental Clinics</h4>
        <p>
          One of the most lucrative niches — high average check, so marketing investments pay off.
        </p>
        <ul className="chapter-list">
          <li>AI content generation: posts with tips, before/after, preventive advice</li>
          <li>Ad banners for Instagram / Google</li>
          <li>AI chat-bot for appointments + FAQ</li>
          <li>Landing page with booking form</li>
        </ul>
        <p className="chapter__text"><b>💰 Packages:</b> $100–$250/month</p>

        {/* 2. Nail / Beauty Services */}
        <h4 className="chapter__smalltitle">2) Nail / Beauty Services</h4>
        <ul className="chapter-list">
          <li>20 AI-generated posts per month + edited photos</li>
          <li>Design price lists, banners, highlights</li>
          <li>Telegram / Instagram bot → automated booking</li>
          <li>Story templates (new colors, promotions, reviews)</li>
        </ul>
        <p className="chapter__text"><b>💰 Packages:</b> $50–$150/month</p>

        {/* 3. Cafes / Coffee Shops */}
        <h4 className="chapter__smalltitle">3) Cafes / Coffee Shops</h4>
        <ul className="chapter-list">
          <li>Content plan + 30 AI-generated posts (menu, drinks, lifestyle)</li>
          <li>Menu design / AI drink photos</li>
          <li>Ad banners + posts for Facebook Ads</li>
          <li>AI chat-bot for collecting reviews</li>
        </ul>
        <p className="chapter__text"><b>💰 Packages:</b> $70–$200/month</p>

        {/* 4. Fashion / Handmade */}
        <h4 className="chapter__smalltitle">4) Fashion / Handmade Brands</h4>
        <ul className="chapter-list">
          <li>30+ AI-generated product photos with models</li>
          <li>Product descriptions, SEO texts for listings</li>
          <li>Banner generation for Instagram + Etsy</li>
          <li>FAQ chat-bot → answers + order intake</li>
          <li>Mini online showcase (React/Nest or Next.js)</li>
        </ul>
        <p className="chapter__text"><b>💰 Packages:</b> $100–$400/month</p>

        {/* 5. Tutors / Online Teachers */}
        <h4 className="chapter__smalltitle">5) Tutors / Online Teachers</h4>
        <ul className="chapter-list">
          <li>Generate learning materials → PDF / presentations</li>
          <li>Quizzes + weekly/monthly notes</li>
          <li>Bot assistant → answers student questions</li>
          <li>Landing page with booking + payment</li>
          <li>Content for Instagram / TikTok (mini lessons)</li>
        </ul>
        <p className="chapter__text"><b>💰 Packages:</b> $70–$230/month</p>

        {/* Quick case formula */}
        <h3 className="chapter__subtitle">Quick Case Creation Formula</h3>
        <ul className="chapter-list">
          <li>Choose a niche</li>
          <li>Generate AI content (10 posts / banners / bot)</li>
          <li>Format the result in a PDF / website</li>
          <li>Send to 20 businesses → get first replies</li>
        </ul>
      </div>
    </section>
  );
};

export default Chapter5;
