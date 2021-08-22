import styles from "../styles/Home.module.scss";
import Image from "next/image";

import { Headline } from "../components/headline";
import { Header } from "../components/header";
import { Sideleft } from "../components/sidebar/sideleft";
import { Sideright } from "../components/sidebar/sideright";
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
