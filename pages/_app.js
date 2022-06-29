import "../styles/_globals.scss";

import { Headline } from "../components/headline";
import { Layout } from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Headline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
