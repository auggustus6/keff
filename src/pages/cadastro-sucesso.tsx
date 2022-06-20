import React from "react";
import { useTheme } from "styled-components";
import Layout from "components/Layout";
import ConsultantSuccessTemplate from "templates/ConsultantSuccessTemplate";
import Head from "next/head";

const ConsultantSuccess: React.FC = () => {
  const theme = useTheme();
  return (
    <>
      <Head>
        <script>
          {`
              !function(f,b,e,v,n,t,s)
                {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                n.queue=[];t=b.createElement(e);t.async=!0;
                t.src=v;s=b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t,s)}(window, document,'script',
                'https://connect.facebook.net/en_US/fbevents.js');
                fbq('init', '971145826890084');
                fbq('track', 'Cadastro');
              `}
        </script>
      </Head>
      <ConsultantSuccessTemplate />;
    </>
  );
};

export default ConsultantSuccess;
