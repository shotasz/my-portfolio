import styles from "./index.module.scss";

function scrollToSection() {
  const contactSection = document
    .querySelector("#contact")
    .getBoundingClientRect();

  return window.scrollTo({
    left: contactSection.left + window.pageXOffset,
    top: contactSection.top + window.pageYOffset,
    behavior: "smooth",
  });
}

export function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <span className={styles.hero__html_start}>&lt;html&gt;</span>
      <span className={styles.hero__body_start}>&lt;body&gt;</span>
      <span className={styles.hero__hero_start}>&lt;section&gt;</span>
      <span className={styles.hero__h1_start}>&lt;h1&gt;</span>

      <h1>
        Hi,
        <br />
        I'm <i>S</i>hota,
        <br />
        web developer.
      </h1>

      <span className={styles.hero__h1_end}>&lt;/h1&gt;</span>

      <p>Front End Developer / Javascript / React</p>

      <span className={styles.hero__btn_start}>&lt;button&gt;</span>

      <button className={styles.btn} onClick={() => scrollToSection()}>
        CONTACT ME
      </button>

      <span className={styles.hero__btn_end}>&lt;/button&gt;</span>
      <span className={styles.hero__hero_end}>&lt;/section&gt;</span>

      <div className={styles.s1}>S</div>
      <div className={styles.s2}>S</div>
    </section>
  );
}
