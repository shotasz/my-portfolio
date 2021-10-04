import styles from "./index.module.scss";

export function Header() {
  return (
    <section className={styles.header} id="header">
      <span className={styles.header__html_start}>&lt;html&gt;</span>
      <span className={styles.header__body_start}>&lt;body&gt;</span>
      <span className={styles.header__header_start}>&lt;header&gt;</span>
      <span className={styles.header__h1_start}>&lt;h1&gt;</span>

      <h1>
        Hi,
        <br />
        I'm <i>S</i>hota,
        <br />
        web developer.
      </h1>

      <span className={styles.header__h1_end}>&lt;/h1&gt;</span>

      <p>Front End Developer / Javascript / React</p>

      <span className={styles.header__btn_start}>&lt;button&gt;</span>

      <button className={styles.btn}>CONTACT ME</button>

      <span className={styles.header__btn_end}>&lt;/button&gt;</span>
      <span className={styles.header__header_end}>&lt;/header&gt;</span>

      <div className={styles.s1}>S</div>
      <div className={styles.s2}>S</div>
    </section>
  );
}
