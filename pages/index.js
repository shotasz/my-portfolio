import styles from "../styles/Home.module.scss";

import { Navigation } from "../components/navigation";
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

export function getStaticProps() {
  const data = getMyData();

  return {
    props: {
      data,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home({ data }) {
  return (
    <main className={styles.container}>
      <Fragment>
        <Navigation items={data.sections} />

        <SideLeft />

        <SideRight />

        <Hero />

        <About />

        <Skills items={data.skills} />

        <Works />

        <Contact />

        <Footer />
      </Fragment>
    </main>
  );
}
