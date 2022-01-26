import Button from "components/Button";
import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

const SectionQuality = () => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerWrapper>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <Styles.Image src="/img/icons/icon-11.png" />
            <Button style={{ marginTop: 20 }} fullWidth>
              <a href="#quero_comecar">
                <Paragraph size="xxlarge" fontWeight="bold" color="white">
                  GARANTA O SEU FUTURO COM A KEFF
                </Paragraph>
              </a>
            </Button>
          </div>
          <Styles.ContainerInfo>
            <img className="icon-certificate" src="/img/icons/icon-19.png" />
            <Title size="huge" align="center" bold color={theme.colors.primary}>
              O PADRÃO KEFF DE QUALIDADE{" "}
              <span style={{ color: "#00d9ff" }}>GARANTE:</span>
            </Title>

            <Styles.Block>
              <img src="/img/icons/icon-7.png" />
              <Paragraph size="xlarge" color="black">
                Profissionais especializados em suplementação
              </Paragraph>
            </Styles.Block>

            <Styles.Block>
              <img src="/img/icons/icon-8.png" />

              <Paragraph size="xlarge" color="black">
                Fórmulas exclusivas com a melhor matéria-prima – aprovado pela
                ANVISA
              </Paragraph>
            </Styles.Block>

            <Styles.Block>
              <img src="/img/icons/icon-9.png" />

              <Paragraph size="xlarge" color="black">
                Gerente exclusivo para acompanhar sua jornada
              </Paragraph>
            </Styles.Block>

            <Styles.Block>
              <img src="/img/icons/icon-10.png" />

              <Paragraph size="xlarge" color="black">
                Prazos de fabricação rápidos, seguros e responsáveis
              </Paragraph>
            </Styles.Block>
          </Styles.ContainerInfo>
        </Styles.ContainerWrapper>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionQuality;
