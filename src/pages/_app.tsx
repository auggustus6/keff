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
          <title>Ressacaps</title>
          <link rel="shortcut icon" href="/img/favicon.png" />
          <link rel="apple-touch-icon" href="/img/favicon.png" />
          <link rel="manifest" href="/manifest.json" />

          <meta property="og:title" content="Ressacaps" />
          <meta property="og:type" content="Pré-Festa infinito" />
          <meta property="og:url" content="https://www.ressacaps.com.br" />
          <meta property="og:image" content="/img/banner-1.png" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-217124789-1"></script>

            <script>
              {
                `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
  
                gtag('config', 'UA-217124789-1');
                `
              }
          
            </script>

          <script>
            {`
          !function(f,b,e,v,n,t,s){
            if(f.fbq)return;n=f.fbq=function(){n.callMethod ?
              n.callMethod.apply(n, arguments) : n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '646506466768386');
            fbq('track', 'PageView');
      `}
          </script>

          <script>
            {
              `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '2317877801681782');
              fbq('track', 'PageView');
              `
            }
          </script>
          <noscript><img height="1" width="1" style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=2317877801681782&ev=PageView&noscript=1"
          /></noscript>

          <noscript>
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src="https://www.facebook.com/tr?id=646506466768386&ev=PageView&noscript=1"
            />
          </noscript>
        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
