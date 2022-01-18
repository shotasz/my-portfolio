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
import { getNavIcons } from "../skillsData";
import { Fragment } from "react";

export function getStaticProps() {
  const products = getMyData();

  return {
    props: {
      products,
    },
    revalidate: 4 * 60 * 60,
  };
}

export default function Home(products) {
  console.log(products);
  const myData = getMyData();

  return (
    <main className={styles.container}>
      <Fragment>
        <Navigation items={getNavIcons()} />

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
