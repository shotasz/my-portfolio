import { Fragment } from "react";
import { Headline } from "../components/headline";
import { Navigation } from "../components/navigation";
import "../styles/_globals.scss";

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
