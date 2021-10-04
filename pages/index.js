import styles from "../styles/Home.module.scss";

import { Headline } from "../components/headline";
import { Hero } from "../components/hero";
import { SideLeft } from "../components/sidebar/sideleft";
import { SideRight } from "../components/sidebar/sideright";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Works } from "../components/works";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

import { getMyData } from "../skillsData";
import { Fragment } from "react";

export default function Home() {
  const myData = getMyData();

  return (
    <main className={styles.container}>
      <Fragment>
        <SideLeft />

        <SideRight />

        <Hero />

        <About />

        <Skills items={myData} />

        <Works />

        <Contact />

        <Footer />
      </Fragment>
    </main>
  );
}
