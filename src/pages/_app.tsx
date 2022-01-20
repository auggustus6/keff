/* eslint-disable prettier/prettier */
// eslint-disable-file no-use-before-define
//eslint-disable
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import { AppProps } from "next/app";
import Head from "next/head";
import theme from "styles/theme";
import "react-calendar/dist/Calendar.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <title>KEFFBR</title>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" href="/img/favicon.png" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet" />

          <meta property="og:title" content="KEFFBR" />
          <meta property="og:type" content="Pré-Festa infinito" />
          <meta property="og:url" content="https://www.ressacaps.com.br" />
          <meta property="og:image" content="/img/banner-1.png" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-217124789-1"></script>



        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
