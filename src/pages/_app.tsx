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
          <meta property="og:type" content="A Keff é uma indústria farmacêutica que oferece suporte completo com as principais tendências do mercado para você que quer começar o seu próprio negócio" />
          <meta property="og:url" content="http://keffbr.com.br/" />
          <meta property="og:image" content="/img/banner-1.png" />
          <meta name="facebook-domain-verification" content="hebz6incj4nyf3536cgtqs02epu1d2" />

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
                fbq('init', '508279967046196');
                fbq('track', 'PageView');
              `
            }
          </script>
          <noscript><img height="1" width="1" style={{display: 'none'}}
        src="https://www.facebook.com/tr?id=508279967046196&ev=PageView&noscript=1"
        /></noscript>


        </Head>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
