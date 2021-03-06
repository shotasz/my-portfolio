import { Hero } from "../components/hero";
import { SideLeft } from "../components/sidebar/sideleft";
import { SideRight } from "../components/sidebar/sideright";
import { About } from "../components/about";
import { Skills } from "../components/skills";
import { Works } from "../components/works";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

import { connectToDatabase } from "../util/mongodb";
import { Fragment } from "react";

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

  return (
    <Fragment>
      <SideLeft />

      <SideRight />

      <Hero />

      <About />

      <Skills items={items.skills} />

      <Works />

      <Contact />

      <div id="notifications"></div>

      <Footer />
    </Fragment>
  );
}
