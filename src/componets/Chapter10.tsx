import "./styles.scss";

const Chapter10 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">

        <h2 className="chapter__title">
          10. Відповіді на питання, які часто виникають
        </h2>

        <div className="faq-section">

          {/* Питання 1 */}
          <div className="faq-item">
            <h4 className="faq-question">1️⃣ Чому клієнт не робить це сам</h4>
            <p className="faq-answer">
              Час та нерви: Для власника бізнесу 5 хвилин може бути “швидко”, але для налаштування бота, інтеграцій та сценаріїв може зайняти години.<br />
              Якість і логіка: Власник часто робить базові налаштування, але не оптимізує сценарії.<br />
              Інтеграції: Збереження даних, нагадування, повідомлення — тут потрібен досвід.
            </p>
          </div>

          {/* Питання 2 */}
          <div className="faq-item">
            <h4 className="faq-question">2️⃣ Якщо контактів для чат-боту більше, ніж безкоштовний план</h4>
            <p className="faq-answer">
              Почати можна з демо на безкоштовному плані (100 контактів).<br />
              Далі клієнт переходить на платний тариф → ти додаєш налаштування та автоматизацію.<br />
              Альтернатива: Google Forms + Telegram бот через Make (Integromat) для великої аудиторії.
            </p>
          </div>

          {/* Питання 3 */}
          <div className="faq-item">
            <h4 className="faq-question">3️⃣ Як зробити безкоштовну автоматизацію через Google Forms + Telegram Bot</h4>

            <div className="example-box">
              <ol>
                <li><b>Створюємо Google Form:</b> додаємо поля: Ім’я, Телефон, Email, Коментар. Копіюємо лінк.</li>
                <li><b>Створюємо Telegram бота:</b> через @BotFather, отримуємо API токен.</li>
                <li><b>Реєструємося в Make:</b> безкоштовно до 1,000 операцій на місяць.</li>
                <li><b>Підключаємо Google Forms:</b> тригер "watch rows" → відповіді автоматично потрапляють у Google Sheets.</li>
                <li><b>Підключаємо Telegram:</b> Send a Message → вставляємо токен → вказуємо одержувача та текст повідомлення.</li>
                <li><b>Тестуємо сценарій:</b> надсилаємо тестові дані через форму → перевіряємо повідомлення.</li>
                <li><b>Активуємо сценарій:</b> натискаємо ON → дані автоматично надходять у Telegram.</li>
              </ol>
            </div>

            <p className="faq-result">
              ✅ <b>Результат:</b> Клієнт отримує дані будь-якої кількості користувачів безкоштовно. Портфоліо готове, можна додавати інтеграції Google Sheets → Email, Calendar, CRM.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Chapter10;
