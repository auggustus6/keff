import Button from "components/Button";
import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

const SectionPartners = () => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerWrapper>
          <Styles.ContainerInfo>
            <Title size="huge" bold color={theme.colors.white}>
              UM POR TODOS E TODOS POR UM
            </Title>

            <Paragraph size="large" color={theme.colors.white}>
              Para te oferecer um procedimento otimizado e de qualidade, a KEFF
              também conta com parceiros capacitados e com excelência na
              execução dos serviços. Você pode contar com a gente, estamos
              preparados para potencializar o seu negócio.
            </Paragraph>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: 50,
              }}
            >
              <Styles.Image
                style={{ maxWidth: "50%" }}
                alt="pote escrito sua marca aqui"
                src="/img/logo-correios.png"
              />
              <Styles.Image
                style={{ maxWidth: "50%" }}
                alt="pote escrito sua marca aqui"
                src="/img/logo-ativa.png"
              />
            </div>

            <Styles.TopButtomImage>
              <Styles.Image
                alt="pote escrito sua marca aqui"
                src="/img/img-logistic.png"
              />
            </Styles.TopButtomImage>

            <Button backgroundColor="white" color="black" fullWidth>
              <a href="#quero_comecar">
                <Paragraph size="xxlarge" color="black" fontWeight="bold">
                  QUERO INICIAR MEU PROJETO
                </Paragraph>
              </a>
            </Button>
          </Styles.ContainerInfo>
          <Styles.SideImageBox>
            <Styles.Image
              alt="pote escrito sua marca aqui"
              src="/img/img-logistic.png"
            />
          </Styles.SideImageBox>
        </Styles.ContainerWrapper>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionPartners;
