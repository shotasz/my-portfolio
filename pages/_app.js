import "../styles/_globals.scss";

import { Fragment } from "react";
import { Headline } from "../components/headline";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Headline />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
