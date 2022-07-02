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
          2年ほど前、UDEMYという動画学習サービスで<i>VBA</i>
          のコースを受講。当時、勤めていた会社の企画部に配属され、
          少しでも残業時間を減らし、業務の効率化を図るためこの技術を選択。
          時間はかかったものの、シンプルな機能の受注管理システムや在庫管理表が自分の自信にもなり、プログラミングを知るきっかけに。
          これを受け、自分のスキルを高めるともに社会に貢献できる仕事に憧れ、学習時間確保のため環境を変えて、現在独学でフロント系の技術を学習しています。
        </p>
      </div>
      <span className={styles.about__p_end}>&lt;/p&gt;</span>
      <span className={styles.about__div_start}>&lt;div&gt;</span>
      <div className={styles.content}>
        <h4>こんな技術に触れています...</h4>
        <p>
          主に<i>Reactjs</i>
          をメインに開発を進めていて、フレームワークは
          <i>Nextjs</i>
          を使っています。 このポートフォリオはそれらの技術に加え、
          <i>Sass</i>、DBには<i>mongoDB</i>を使い、デプロイは<i>Vercel</i>
          を使っています。
          <br />
          他にもShopify GraphQL
          APIを使って、最低限の機能を用いた架空のECサイト。 技術には
          <i>graphQL</i>、<i>Typescript</i>、<i>TailwindCSS</i>
          を採用しています。URL、Githubも確認できますので、良かったら見てみて下さい。
        </p>
        <div className={styles.image}>
          <Image
            src="/user-image-2.JPG"
            width={270}
            height={270}
            quality="85"
            priority={true}
          />
        </div>
      </div>
      <span className={styles.about__div_end}>&lt;div&gt;</span>
      <span className={styles.about__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
