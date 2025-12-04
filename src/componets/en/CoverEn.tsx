import React from "react";
import "../styles.scss";

const Cover: React.FC = () => {
  return (
    <header className="ai-cover" role="banner" aria-label="Book Cover">
      <div className="ai-cover__overlay" />
      <div className="ai-cover__container">
        <h1 className="ai-cover__title">
          Your First AI Income: A Beginner's Guide
        </h1>
        <p className="ai-cover__subtitle">
          The easiest way to start without skills — a practical step-by-step guide for
          anyone who wants to earn with artificial intelligence today.
        </p>

        <div className="ai-cover__meta">
          <span className="ai-cover__meta-item">Author: FlyApp Studio</span>
          <span className="ai-cover__meta-divider" aria-hidden="true">•</span>
          <span className="ai-cover__meta-item">Style: Business Pro</span>
        </div>
        <div className="ai-cover__cta">
          <button className="btn btn--primary" aria-label="Start Reading">
            Contact the Author
          </button>
          <button className="btn btn--ghost" aria-label="Download PDF">
            Download PDF
          </button>
        </div>
      </div>
    </header>
  );
};

export default Cover;
