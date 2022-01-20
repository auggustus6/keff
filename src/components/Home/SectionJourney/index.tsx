import Button from "components/Button";
import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

const SectionJourney = () => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerWrapper>
          <Styles.ContainerInfo>
            <Title size="huge" color={theme.colors.white}>
              COMECE AGORA A SUA JORNADA DE SUCESSO
            </Title>

            <Paragraph size="medium" color="white">
              Buscamos sempre o aperfeiçoamento – nosso e dos nossos clientes. É
              por isso que a KEFF oferece mais que um serviço. Ela oferece
              qualidade de vida! Nossa parceria possibilita que você construa
              sua marca com o suporte adequado e inovador – conquiste a
              independência financeira ao lado de quem é referência no mercado.
            </Paragraph>

            <Button fullWidth backgroundColor="white" color="black">
              <Paragraph size="xlarge" color="black" fontWeight="bold">
                CADASTRAR AGORA
              </Paragraph>
            </Button>
          </Styles.ContainerInfo>
          <Styles.Image src="/img/icons/icon-12.png" />
        </Styles.ContainerWrapper>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionJourney;
