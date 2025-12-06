// PaymentPage.tsx
import styles from "./PaymentPage.module.scss";

const PaymentPage = () => {
  const handlePayment = () => {
    const link = "https://flyapp.gumroad.com/l/ai-lesson-ua"
    window.open(link, "_blank");
  };

  return (
    <div className={styles.wrapper}>
      <header className={styles.header}>
        <h1>Secure Your AI Guide</h1>
        <p>Get full access to the AI prompts guide for just $4.99 </p>
      </header>

      <main className={styles.main}>
        <div className={styles.productCard}>
          <img
            src="/product-cover.png"
            alt="AI Guide Cover"
            className={styles.productImage}
          />
          <h2>Ultimate AI Prompts Guide</h2>
          <p>Unlock all ready-to-use prompts and start boosting your productivity.</p>
          <div className={styles.buttons}>
            <button
              className={styles.payButton}
              onClick={() => handlePayment()}
            >
              Pay $4.99 (USD)
            </button>
         
          </div>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>100% secure payment. Instant access after payment.</p>
      </footer>
    </div>
  );
};

export default PaymentPage;
