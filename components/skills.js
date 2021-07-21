import styles from "../styles/Skills.module.scss";
import IconHtml from "./icons-skill/icon-html";
import IconCss from "./icons-skill/icon-css";
import IconSass from "./icons-skill/icon-sass";
import IconJavascript from "./icons-skill/icon-javascript";
import IconReact from "./icons-skill/icon-react";
import IconNpm from "./icons-skill/icon-npm";

export function Skills() {
  return (
    <section className={styles.skills}>
      <span className={styles.skills__section_start}>&lt;section&gt;</span>
      <span className={styles.skills__h2_start}>&lt;h2&gt;</span>
      <h2>Skills & Experiences</h2>
      <span className={styles.skills__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.skills__div_start}>&lt;div&gt;</span>
      <div className={styles.skill}>
        <figure>
          <div className={styles.skill__icon}>
            <IconHtml />
          </div>
          <span className={styles.skill__title}>HTML</span>
          <div className={styles.skill__square}></div>
          <span className={styles.skill__percent}>90%</span>
        </figure>

        <figure>
          <div className={styles.skill__icon}>
            <IconCss />
          </div>
          <span className={styles.skill__title}>CSS</span>
          <div className={styles.skill__square}></div>
          <span className={styles.skill__percent}>70%</span>
        </figure>

        <figure>
          <div className={styles.skill__icon}>
            <IconSass />
          </div>
          <span className={styles.skill__title}>SASS</span>
          <div className={styles.skill__square}></div>
          <span className={styles.skill__percent}>70%</span>
        </figure>

        <figure>
          <div className={styles.skill__icon}>
            <IconJavascript />
          </div>
          <span className={styles.skill__title}>JAVASCRIPT</span>
          <div className={styles.skill__square}></div>
          <span className={styles.skill__percent}>70%</span>
        </figure>

        <figure>
          <div className={styles.skill__icon}>
            <IconReact />
          </div>
          <span className={styles.skill__title}>REACT</span>
          <div className={styles.skill__square}></div>
          <span className={styles.skill__percent}>60%</span>
        </figure>

        <figure>
          <div className={styles.skill__icon}>
            <IconNpm />
          </div>
          <span className={styles.skill__title}>NPM</span>
          <div className={styles.skill__square}></div>
          <span className={styles.skill__percent}>50%</span>
        </figure>
      </div>
      <span className={styles.skills__div_end}>&lt;/div&gt;</span>
      <span className={styles.skills__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
