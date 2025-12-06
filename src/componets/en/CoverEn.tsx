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
          <button>
            <a
              className="btn btn--primary"
              href="https://t.me/julasweta"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact the Author"
            >

              Contact the Author
            </a>
          </button>

          <a href="/aiboockEn.pdf" download>
            <button className="btn btn--ghost" aria-label="Завантажити PDF">
              Download PDF
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Cover;
