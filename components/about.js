import styles from "../styles/About.module.scss";
import Image from "next/image";

export function About() {
  return (
    <section className={styles.about}>
      <span className={styles.about__section_start}>&lt;section&gt;</span>
      <span className={styles.about__h2_start}>&lt;h2&gt;</span>
      <h2>About Me</h2>
      <span className={styles.about__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.about__p_start}>&lt;p&gt;</span>
      <p>
        ポートフォリオをご覧頂きありがとうございます。
        <br />
        <i>S</i>hotaと申します。
        <br />
        昨年の夏からフロントエンジニアを目指して、
        <br />
        プログラミング学習を開始しました。
        <br />
        主に<i>Javascript</i>や<i>React</i>
        をメインに勉強中で、
        <br />
        デザインよりコーディングの方を得意とします。
      </p>
      <span className={styles.about__p_end}>&lt;/p&gt;</span>
      <span className={styles.about__section_end}>&lt;/section&gt;</span>

      <div className={styles.about__img}>
        <Image src="/../public/user-image.jpg" width={300} height={300} />
      </div>
    </section>
  );
}
