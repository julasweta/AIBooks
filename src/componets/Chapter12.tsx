import "./styles.scss";

const Chapter12 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">
          12. Що робити, щоб підняти рівень своїх послуг і заробітків як виконавець
        </h2>

        <p className="chapter__text">
          Варто сфокусуватися на трьох основних напрямках: технічні навички, бізнес-розуміння та маркетинг/продажі. Ось конкретно, що радимо вивчити:
        </p>

        <h2 className="chapter__smalltitle">1. Технічні знання та інструменти</h2>
        <ul className="chapter-list">
          <li><b>API та інтеграції:</b>
            <ul>
              <li>Вміти підключати бота до CRM, Google Sheets, Google Calendar, Telegram, Instagram, WhatsApp.</li>
              <li>Розуміти REST API та Webhooks.</li>
            </ul>
          </li>
          <li><b>No-code / low-code платформи:</b>
            <ul>
              <li>Make (Integromat), Zapier, Tally, Airtable – щоб робити складні автоматизації без коду.</li>
            </ul>
          </li>
          <li><b>AI та NLP (Natural Language Processing):</b>
            <ul>
              <li>ChatGPT API або інші LLM для більш “розумних” ботів.</li>
              <li>Генерація тексту, обробка запитів клієнтів, класифікація повідомлень.</li>
            </ul>
          </li>
          <li><b>Front-end для демонстрацій:</b>
            <ul>
              <li>Можливість зробити простий веб-інтерфейс для тестування ботів (React/TypeScript).</li>
            </ul>
          </li>
          <li><b>Бекенд та база даних:</b>
            <ul>
              <li>Nest.js / Node.js, PostgreSQL або Firebase для збереження даних клієнтів та історії.</li>
            </ul>
          </li>
          <li><b>Аналітика та візуалізація даних:</b>
            <ul>
              <li>Google Data Studio, Tableau або інтеграція з Excel/Sheets для показу клієнтам результатів.</li>
            </ul>
          </li>
        </ul>

        <h2 className="chapter__smalltitle">2. Маркетинг та продажі</h2>
        <ul className="chapter-list">
          <li><b>Переконливе портфоліо:</b>
            <ul>
              <li>Реальні або демо-проекти з описом, скільки часу/ресурсів заощаджує бот.</li>
              <li>Кейс-стаді: до/після використання ботів.</li>
            </ul>
          </li>
          <li><b>Комунікація з клієнтом:</b>
            <ul>
              <li>Навички продажу “результату”, а не просто технічної послуги.</li>
              <li>Створення пропозицій та демонстрацій, які показують користь.</li>
            </ul>
          </li>
          <li><b>Соцмережі та платформи для фрілансу:</b>
            <ul>
              <li>LinkedIn, Upwork, Fiverr, українські майданчики.</li>
              <li>Пости/кейси з AI-ботами для залучення клієнтів.</li>
            </ul>
          </li>
        </ul>

      </div>
    </section>
  );
};

export default Chapter12;
