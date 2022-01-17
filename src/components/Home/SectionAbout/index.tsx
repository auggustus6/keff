import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

const SectionAbout = () => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerWrapper>
          <iframe
            width="100%"
            height="409"
            src="https://www.youtube.com/embed/EPkA3nWu8cM"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>

          <Styles.ContainerInfo>
            <Title size="huge" color={theme.colors.primary}>
              O Pré Festa Oficial do Brasileiro
            </Title>

            <Title size="medium" color="white">
              Primeira dose da festa: 1 Dose de RessaCaps, por favor!
            </Title>

            <Paragraph size="medium" color="white">
              Cada dose contém duas cápsulas que combinam 18 nutrientes
              essenciais para prevenção da famosa RESSACA!
            </Paragraph>

            <Paragraph size="medium" color="white">
              Suplemento alimentar ultraconcentrado que mantém seu organismo
              disposto e saudável durante e após uma boa festa!
            </Paragraph>

            <Paragraph size="medium" color="white">
              Sugestão de consumo: tomar 2 cápsulas antes de iniciar a ingestão
              de álcool ou comida.
            </Paragraph>
          </Styles.ContainerInfo>
        </Styles.ContainerWrapper>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionAbout;
