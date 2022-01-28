import React from "react";
import Title from "components/Title";
import Paragraph from "components/Paragraph";
import { useTheme } from "styled-components";
import Link from "next/link";
import Layout from "components/Layout";
import * as Styles from "./styles";

const ConsultantSuccessTemplate = () => {
  const theme = useTheme();
  return (
    <Layout>
      <Styles.Wrapper>
        <Title size="xxlarge" color={theme.colors.primary}>
          Parabéns, cadastro feito com sucesso!!
        </Title>

        <Paragraph size="medium" color={theme.colors.black}>
          Fique tranquilo, em breve vamos entrar em contato com você por
          WhatsApp para tirar todas as dúvidas!
        </Paragraph>
      </Styles.Wrapper>
    </Layout>
  );
};

export default ConsultantSuccessTemplate;
