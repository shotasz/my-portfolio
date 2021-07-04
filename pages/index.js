import Head from "next/head";
import Image from "next/image";
import styles from "../styles/_Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500;700&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet"/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet"/> 
        <link rel="icon" href="/s-logo.svg" />
      </Head>

      <div className={styles.sidebarLeft}> 
        <nav>
          <div>
            <Image src="/s-logo.svg" alt="Icon Home" width={50} height={50} />
          </div>

          <ul>
            <li>
                <a href="#">
                  <Image src="/005-home.svg" alt="Icon Home" width={33} height={30} />
                </a>
            </li>

            <li>
                <a href="#">
                  <Image src="/004-user.svg" alt="Icon Home" width={33} height={30} />
                </a>
            </li>

            <li>
                <a href="#">
                  <Image src="/003-settings.svg" alt="Icon Home" width={33} height={30} />
                </a>
            </li>

            <li>
                <a href="#">
                  <Image src="/006-vision.svg" alt="Icon Home" width={33} height={30} />
                </a>
            </li>

            <li>
                <a href="#">
                  <Image src="/002-email.svg" alt="Icon Home" width={33} height={30} />
                </a>
            </li>
          </ul>

          <div>
            <span>
              <Image src="/007-twitter.svg" alt="Icon Home" width={33} height={30} />
            </span>
            <span>
              <Image src="/001-github.svg" alt="Icon Home" width={33} height={30} />
            </span>
          </div>
        </nav>
      </div>

      <div className={styles.sidebarRight}> 
        <h3>SIDEBAR RIGHT</h3>
      </div>

      <header className={styles.header}>
        <span className={styles.header__html_start}>&lt;html&gt;</span>
        <span className={styles.header__body_start}>&lt;body&gt;</span>
        <span className={styles.header__header_start}>&lt;header&gt;</span>
        <span className={styles.header__h1_start}>&lt;h1&gt;</span>

        <h1>Hi,<br />I'm <i>S</i>hota,<br />web developer.</h1>

        <span className={styles.header__h1_end}>&lt;/h1&gt;</span>

        <p>Front End Developer / Javascript / React</p>

        <span className={styles.header__btn_start}>&lt;button&gt;</span>

        <button className={styles.btn}>CONTACT ME</button>

        <span className={styles.header__btn_end}>&lt;/button&gt;</span>
        <span className={styles.header__header_end}>&lt;/header&gt;</span>

        <div className={styles.header__s1}>S</div>
        <div className={styles.header__s2}>S</div>
      </header>

      <section className={styles.about}>
        <h2>SECTION 1</h2> 
      </section>

      <section className={styles.skills}>
      <h2>SECTION 2</h2> 
      </section>

      <section className={styles.works}>
      <h2>SECTION 3</h2> 
      </section>

      <section className={styles.contact}>
      <h2>SECTION 4</h2> 
      </section>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
