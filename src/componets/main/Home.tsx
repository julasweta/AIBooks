// File: ProductLanding.tsx
import React from "react";
import styles from "./Home.module.scss";
import heroImage from "/bg.jpg"; // приклад зображення
import featureImage1 from "/aiboock.pdf";
import featureImage2 from "/aiboock.pdf";

const Home: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      {/* Hero section */}
      <header className={styles.hero}>
        <img src={heroImage} alt="AI earning guide" className={styles.heroImg} />
        <h1>Перший AI-дохід: Гайд для новачка</h1>
        <p className={styles.subtitle}>
          Створи перший прибутковий AI-проєкт за 6 тижнів навіть без досвіду програмування. Практичні кейси, тестовані промпти та покрокові інструкції.
        </p>
        <button className={styles.cta}>Почати заробляти з AI зараз</button>
      </header>

      {/* Features section */}
      <section className={styles.features}>
        <h2>Особливості та переваги</h2>
        <ul>
          <li>
            <img src={featureImage1} alt="Quick start" />
            <div>
              <strong>Швидкий старт</strong>
              <p>Покрокова інструкція для першого прибуткового AI-проекту.</p>
            </div>
          </li>
          <li>
            <img src={featureImage2} alt="Tested prompts" />
            <div>
              <strong>Практичні промпти</strong>
              <p>Випробувані шаблони для ChatGPT та інших інструментів.</p>
            </div>
          </li>
          <li>
            <span className={styles.icon}>📈</span>
            <div>
              <strong>Підвищення продуктивності</strong>
              <p>Інтеграції та автоматизації для +30% ефективності в роботі.</p>
            </div>
          </li>
          <li>
            <span className={styles.icon}>💰</span>
            <div>
              <strong>Монетизація AI</strong>
              <p>Конкретні приклади, як заробляти на AI-проєктах відразу після навчання.</p>
            </div>
          </li>
          <li>
            <span className={styles.icon}>🧩</span>
            <div>
              <strong>Адаптація під фріланс</strong>
              <p>Інтеграція з поточними проєктами та робочим процесом React.js розробника.</p>
            </div>
          </li>
          <li>
            <span className={styles.icon}>⚡</span>
            <div>
              <strong>Швидке впровадження</strong>
              <p>Мінімум теорії — максимум практики та результату.</p>
            </div>
          </li>
        </ul>
      </section>

      {/* Testimonial */}
      <section className={styles.testimonial}>
        <p>
          "Цей гайд допоміг мені з нуля створити перший AI-проект і заробити перші $300 вже за місяць! Практичний, зрозумілий та надихаючий."
        </p>
        <span>- Анна, Frontend React.js розробник</span>
      </section>

      {/* CTA footer */}
      <footer className={styles.footer}>
        <button className={styles.cta}>Отримати гайд і почати заробляти</button>
      </footer>
    </div>
  );
};

export default Home;

