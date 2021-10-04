import { Fragment } from "react";
import { Headline } from "../components/headline";
import "../styles/_globals.scss";

import { Navigation } from "../components/navigation";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Headline />
      <Navigation />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
