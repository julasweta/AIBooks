import "./styles.scss";

const Chapter7 = () => {
  return (
    <section className="section chapter">
      <div className="section__container">
        <h2 className="chapter__title">
          7. Як знайти перших клієнтів та отримати відповідь
        </h2>

        <p className="chapter__text">
          Початок найскладніший — але тут немає секретів, тільки системність.
          Мета: отримати 1–2 перші угоди без досвіду.
        </p>

        <h3 className="chapter__subtitle">Крок 1: Визначаємо цільову аудиторію</h3>
        <p>Почни з маленьких бізнесів або приватних майстрів:</p>

        <table className="chapter-table chapter-table--2col">
          <thead>
            <tr>
              <th>Ніша</th>
              <th>Де шукати</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Нігтьовий сервіс</td>
              <td>Instagram, TikTok, локальні сторінки салонів</td>
            </tr>
            <tr>
              <td>Handmade / Одяг</td>
              <td>Etsy, Instagram, Facebook Marketplace</td>
            </tr>
            <tr>
              <td>Репетитори / курси</td>
              <td>Instagram, локальні Telegram-групи, сайти онлайн-курсів</td>
            </tr>
            <tr>
              <td>Кав’ярні / ресторани</td>
              <td>Google Maps, Instagram, локальні сторінки</td>
            </tr>
          </tbody>
        </table>

        <h3 className="chapter__subtitle">Крок 2: Що робити після відповіді</h3>
        <div className="msg-box">
          <ul>
            <li>Відправляєш тестовий матеріал (1–2 пости або банер)</li>
            <li>Якщо клієнт схвалив → пропонуєш пакет послуг із ціною</li>
            <li>
              Домовляєшся про оплату через PayPal, Monobank, Revolut або на картку — головне, щоб було швидко та безпечно
            </li>
          </ul>
        </div>

        <h4 className="chapter__smalltitle">⚡ Психологія</h4>
        <p className="chapter__text">
          Клієнти цінують швидкий результат і простоту, а не твої сертифікати чи роки досвіду.
        </p>
      </div>
    </section>
  );
};

export default Chapter7;
