import styles from "./index.module.scss";
import Image from "next/image";

export function About() {
  return (
    <section className={styles.about} id="about">
      <span className={styles.about__section_start}>&lt;section&gt;</span>
      <span className={styles.about__h2_start}>&lt;h2&gt;</span>
      <h2>About Me</h2>
      <span className={styles.about__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.about__p_start}>&lt;p&gt;</span>
      <p>
        ポートフォリオをご覧頂きありがとうございます。
        <br />
        <i>S</i>hotaと申します。
        昨年からフロントエンジニアを目指して、プログラミング学習を開始しました。
        主に<i>Javascript</i>や<i>React</i>
        をメインに開発を進めていて、フレームワークは<i>NextJS</i>
        を使っています。
      </p>
      <span className={styles.about__p_end}>&lt;/p&gt;</span>
      <span className={styles.about__section_end}>&lt;/section&gt;</span>

      <div className={styles.about__img}>
        <Image
          src="/user-image.jpg"
          width={270}
          height={270}
          placeholder="blur"
        />
      </div>
    </section>
  );
}
