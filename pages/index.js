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

import { connectToDatabase } from "../util/mongodb";
import { Fragment, useEffect } from "react";
import { revealSectionHandler } from "../components/ui/utilities";

export async function getServerSideProps() {
  const { db } = await connectToDatabase();

  const data = await db.collection("data").find().toArray();

  return {
    props: {
      data: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default function Home({ data }) {
  const [items] = data;

  useEffect(() => {
    revealSectionHandler();
  }, []);

  return (
    <main className={styles.container}>
      <Fragment>
        <Navigation items={items.sections} />

        <SideLeft />

        <SideRight />

        <Hero />

        <About />

        <Skills items={items.skills} />

        <Works />

        <Contact />

        <Footer />
      </Fragment>
    </main>
  );
}
