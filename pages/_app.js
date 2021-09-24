import { Fragment } from "react";
import { Headline } from "../components/headline";
import "../styles/_globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <Headline />
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
