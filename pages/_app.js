import "../styles/_globals.scss";

import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../components/ui/theme";
import { Headline } from "../components/headline";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Headline />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
