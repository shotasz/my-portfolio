import "../styles/_globals.scss";

import { Headline } from "../components/headline";
import { Fragment } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Headline />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
