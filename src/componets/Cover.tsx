import React from "react";
import "./styles.scss";

const Cover: React.FC = () => {
  return (
    <header className="ai-cover" role="banner" aria-label="Обкладинка книги">
      <div className="ai-cover__overlay" />
      <div className="ai-cover__container">
        <h1 className="ai-cover__title">
          Твій перший AI-дохід: Інструкція для повного новачка
        </h1>
        <p className="ai-cover__subtitle">
          Найпростіший спосіб стартувати без навичок — практичний покроковий гайд для
          тих, хто хоче заробляти на штучному інтелекті вже сьогодні.
        </p>

        <div className="ai-cover__meta">
          <span className="ai-cover__meta-item">Автор: FlyApp Studio</span>
          <span className="ai-cover__meta-divider" aria-hidden="true">•</span>
          <span className="ai-cover__meta-item">Стиль: Business Pro</span>
        </div>
        <div className="ai-cover__cta">
          <a
            className="btn btn--primary"
            href="https://t.me/julasweta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact the Author"
          >
            Contact the Author
          </a>
          <a href="/aiboock.pdf" download>
            <button className="btn btn--ghost" aria-label="Завантажити PDF">
              Завантажити PDF
            </button>
          </a>

        </div>
   
      </div>
    
    </header>
  );
};

export default Cover;
