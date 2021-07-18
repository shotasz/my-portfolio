import styles from "../styles/Home.module.scss";

import { Headline } from "../components/headline";
import { Header } from "../components/header";
import { Sideleft } from "../components/sideleft";
import { Sideright } from "../components/sideright";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Works } from "../components/works";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Headline />

      <Sideleft />

      <Sideright />

      <Header />

      <About />

      <Skills />

      <Works />

      <Contact />

      <Footer />
    </div>
  );
}
