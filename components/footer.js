import styles from "./footer.module.scss";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <span className={styles.footer__footer_start}>&lt;footer&gt;</span>
      <div className={styles.footer__content}>
        <p>
          Designed & Build by <a>Shota Suzuki</a>
        </p>
      </div>
      <span className={styles.footer__footer_end}>&lt;/footer&gt;</span>
      <span className={styles.footer__body_end}>&lt;/body&gt;</span>
      <span className={styles.footer__html_end}>&lt;/html&gt;</span>
    </footer>
  );
}
