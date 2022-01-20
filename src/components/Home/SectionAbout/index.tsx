import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";
import Button from "components/Button";

const SectionAbout = () => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerWrapper>
          <Styles.ContainerInfo>
            <Title size="huge" color={"#9480ff"}>
              SEU
            </Title>
            <Title size="huge" bold color={theme.colors.primary}>
              SUCESSO
            </Title>
            <Title size="huge" color={"#9480ff"}>
              COMEÇA AQUI
            </Title>

            <Paragraph size="medium" color="black">
              A Keff é uma indústria farmacêutica que oferece suporte completo
              com as principais tendências do mercado para você que quer começar
              o seu próprio negócio
            </Paragraph>

            <Paragraph size="medium" color="black">
              Desenvolva uma fórmula exclusiva para sua marca de encapsulados.
              Possuimos um amplo catálogo de opções e auxiliamos na sua escolha.
              Atendemos pequenas e grandes quantidades, serviços de
              fracionamento e elaboração total do produto.
            </Paragraph>

            <Button fullWidth backgroundColor={theme.colors.primary}>
              <Paragraph size="xxlarge" color="white" fontWeight="bold">
                QUERO MINHA FÓRMULA
              </Paragraph>
            </Button>
          </Styles.ContainerInfo>
          <Styles.Image
            alt="pote escrito sua marca aqui"
            src="/img/pocket.png"
          />
        </Styles.ContainerWrapper>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionAbout;
