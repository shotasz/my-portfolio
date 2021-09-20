import styles from "../styles/Home.module.scss";

import { Headline } from "../components/headline";
import { Header } from "../components/header";
import { Sideleft } from "../components/sidebar/sideleft";
import { Sideright } from "../components/sidebar/sideright";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Works } from "../components/works";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

import { getMyData } from "../skillsData";

export default function Home() {
  const myData = getMyData();

  return (
    <div className={styles.container}>
      <Headline />

      <Sideleft />

      <Sideright />

      <Header />

      <About />

      <Skills items={myData} />

      <Works />

      <Contact />

      <Footer />
    </div>
  );
}
