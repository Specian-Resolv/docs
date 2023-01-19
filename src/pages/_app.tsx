import { AppProps } from "next/app";
import { ThemeProvider } from "../styles/theme";
import { OverlayProvider } from "react-aria";
import { Page } from "../layouts/Page";
import Head from "next/head";
import "../styles/fonts.css";

const MyApp = ({ Component, pageProps }: AppProps) => {

  return (
    <><Head>
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head><ThemeProvider>
        <OverlayProvider>
          <Page><Component {...pageProps} /></Page>
        </OverlayProvider>
      </ThemeProvider></>
  );
};

export default MyApp;
