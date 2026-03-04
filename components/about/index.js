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
      <div className={styles.paragraph}>
        <p>
          ポートフォリオをご覧頂きありがとうございます。
          <br />
          <i>S</i>hota<i>S</i>uzukiと申します。
          5年前、当時勤めていた会社の企画部に配属され、
          少しでも残業時間を減らし業務の効率化を図るため、<i>VBA</i>を使って
          シンプルな受注管理システムや在庫管理表を作成しました。
          これをきっかけに自分のスキルを高めるともに社会に貢献できる仕事に憧れ、
          エンジニアを目指しました。
        </p>
      </div>
      <span className={styles.about__p_end}>&lt;/p&gt;</span>
      <span className={styles.about__div_start}>&lt;div&gt;</span>
      <div className={styles.content}>
        <h4>こんな技術に触れています...</h4>
        <p>
          主に<i>React</i>をメインに開発しています。
          こちらのポートフォリオもFWは
          <i>Nextjs</i>、 スタイルに<i>Sass</i>
          、お問い合わせには<i>resend</i>を使い、デプロイは
          <i>Vercel</i>の構成です。
          <br />
          他にもバックエンドに
          <i>Sanity</i>、フロントエンドに<i>Typescript</i>、<i>React</i>、
          <i>TailwindCSS</i>、<i>Nextjs</i>
          を使って、今まで学習した集大成のレシピアプリをポートフォリオ用に開発しました。
          URL、Githubも確認できますので、良かったら見てみて下さい。
        </p>
        <div className={styles.image}>
          <Image
            src="/user-image-2.JPG"
            width={270}
            height={270}
            quality="85"
            priority={true}
            alt="user_image"
          />
        </div>
      </div>
      <span className={styles.about__div_end}>&lt;div&gt;</span>
      <span className={styles.about__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
