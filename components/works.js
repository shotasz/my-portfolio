import styles from "../styles/Works.module.scss";
import Image from "next/image";
import IconGithub from "./icons/github";
import IconLink from "./icons/link";

export function Works() {
  return (
    <section className={styles.works}>
      <span className={styles.works__section_start}>&lt;section&gt;</span>
      <span className={styles.works__h2_start}>&lt;h2&gt;</span>
      <h2>My Works</h2>
      <span className={styles.works__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.works__div_start}>&lt;div&gt;</span>
      <div className={styles.work}>
        <div className={styles.work__img}>
          <Image
            src="/../public/kondatte-app.jpg"
            width={600}
            height={410}
            quality={30}
          />
        </div>
        <div className={styles.work__content}>
          <h4>Featured Project</h4>
          <h3>Kondatte App</h3>
          <p>
            献立アプリケーション
            <br />
            ユーザーがアプリ内で自分用の献立リストを作ることができるアプリ。
            <br />
            新規登録はもちろんのこと、過去に作った献立メニューを検索したり、
            <br />
            好みが変わって献立を編集したり、カロリー表示も確認できるアプリ。
            <br />
          </p>
          <span>Next.js</span>
          <span>Sass</span>
          <div>
            <IconGithub />
            <IconLink />
          </div>
        </div>
      </div>
      <span className={styles.works__div_end}>&lt;/div&gt;</span>
      <span className={styles.works__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
