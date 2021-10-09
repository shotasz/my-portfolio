import "../styles/_globals.scss";

import { Fragment } from "react";
import { Headline } from "../components/headline";
import { Navigation } from "../components/navigation";

import { getNavIcons } from "../skillsData";
import { scrollToSection } from "../components/ui/utilities";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Headline />
      <Navigation items={getNavIcons()} />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
