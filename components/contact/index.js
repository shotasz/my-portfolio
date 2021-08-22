import styles from "./index.module.scss";

export function Contact() {
  return (
    <section className={styles.contact}>
      <span className={styles.contact__section_start}>&lt;section&gt;</span>
      <div className={styles.contact__content}>
        <span className={styles.contact__h2_start}>&lt;h2&gt;</span>
        <h2>Contact Me</h2>
        <span className={styles.contact__h2_end}>&lt;/h2&gt;</span>
        <span className={styles.contact__button_start}>&lt;button&gt;</span>
        <button className={styles.btn}>SEND MAIL</button>
        <span className={styles.contact__button_end}>&lt;/button&gt;</span>
      </div>
      <span className={styles.contact__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
