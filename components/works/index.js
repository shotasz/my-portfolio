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
        <div className={styles.image}>
          <Image
            src="/recipe-app.png"
            width={600}
            height={410}
            quality="85"
            priority={true}
          />
        </div>
        <div className={styles.content}>
          <h4>Featured Project</h4>
          <a
            className={styles.link}
            href="https://food-app-ebon.vercel.app"
            target="_blank"
          >
            <h3>FoodRecipe App</h3>
          </a>

          <p>
            ヘッドレスCMSのSanityAPIを使用したレシピアプリ。CRUDの4機能+Auth機能の備わった管理画面でユーザーがレシピを書き留めておけるアプリととなっています。
          </p>

          <ul>
            <li>Next.js</li>
            <li>Sanity API</li>
            <li>Google Auth</li>
          </ul>

          <div className={styles.icons}>
            <div>
              <a href="https://github.com/shotasz/food-app" target="_blank">
                <IconGithub />
              </a>
            </div>
            <div>
              <a href="https://food-app-ebon.vercel.app" target="_blank">
                <IconLink />
              </a>
            </div>
          </div>
        </div>
      </div>

      <span className={styles.works__div_end}>&lt;/div&gt;</span>
      <span className={styles.works__section_end}>&lt;/section&gt;</span>
    </section>
  );
}
