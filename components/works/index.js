import styles from "./index.module.scss";

import Image from "next/image";
import IconGithub from "../icons/github";
import IconLink from "../icons/link";

export function Works() {
  return (
    <section className={styles.works} id="works">
      <span className={styles.works__section_start}>&lt;section&gt;</span>
      <span className={styles.works__h2_start}>&lt;h2&gt;</span>
      <h2>My Works</h2>
      <span className={styles.works__h2_end}>&lt;/h2&gt;</span>
      <span className={styles.works__div_start}>&lt;div&gt;</span>
      <div className={styles.work}>
        <div className={styles.work__img}>
          <a href="#">
            <Image
              src="/kondatte-app.jpg"
              width={600}
              height={410}
              placeholder="blur"
            />
          </a>
        </div>
        <div className={styles.work__content}>
          <h4>Featured Project</h4>
          <h3>Kondatte App</h3>
          <p>
            ユーザーがアプリ内で自分用の献立リストを作ることができるアプリ。
            献立メニューを新規登録、編集、検索したり、カロリー表示も確認できるアプリ。
          </p>
          <ul>
            <li>Next.js</li>
            <li>Sass</li>
          </ul>
          <div>
            <IconGithub />
          </div>
        </div>
      </div>

      <span className={styles.works__div_end}>&lt;/div&gt;</span>
      <span className={styles.works__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
