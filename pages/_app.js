import { Headline } from "../components/headline";
import { Layout } from "../components/layout/layout";
import "../styles/_globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Headline />
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
