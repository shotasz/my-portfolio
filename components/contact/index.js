import styles from "./index.module.scss";

export function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <span className={styles.contact__section_start}>&lt;section&gt;</span>
      <span className={styles.contact__h2_start}>&lt;h2&gt;</span>
      <h2>Contact Me</h2>
      <span className={styles.contact__h2_end}>&lt;/h2&gt;</span>
      <div>
        <span className={styles.contact__button_start}>&lt;button&gt;</span>
        <a href="mailto:s2shota123@gmail.com" target="_blank">
          <button className={styles.btn}>SEND MAIL</button>
        </a>
        <span className={styles.contact__button_end}>&lt;/button&gt;</span>
      </div>
      <span className={styles.contact__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
