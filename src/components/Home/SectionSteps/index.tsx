import Button from "components/Button";
import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

const SectionSteps = () => {
  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerWrapper>
          <Styles.ContainerInfo>
            <Title size="huge" bold color={theme.colors.white}>
              PASSO A PASSO
            </Title>
            <Title size="xxlarge" color={theme.colors.white}>
              PARA REALIZAR SEU SONHO
            </Title>

            <Styles.Grid>
              <Styles.ContainerCard>
                <img src="/img/icons/icon-13.png" />
                <Paragraph size="xxlarge" fontWeight="bold" color="white">
                  ESCOLHA SEU PRODUTO
                </Paragraph>
                <span>
                  Entenda como funciona a terceirização e escolha o produto que
                  atende sua necessidade
                </span>
              </Styles.ContainerCard>

              <Styles.ContainerCard>
                <img src="/img/icons/icon-14.png" />
                <Paragraph size="xxlarge" fontWeight="bold" color="white">
                  APROVAÇÃO DE FORMULAÇÃO
                </Paragraph>
                <span>
                  Escolhemos a fórmula para o produto ou desenvolvemos uma
                  exclusiva para seu projeto
                </span>
              </Styles.ContainerCard>

              <Styles.ContainerCard>
                <img src="/img/icons/icon-15.png" />
                <Paragraph size="xxlarge" fontWeight="bold" color="white">
                  ESCOLHA DA EMBALAGEM E RÓTULOS
                </Paragraph>
                <span>
                  Definimos a melhor embalagem para o seu produto. Oferecemos
                  todo suporte para um desenvolvimento eficiente, ágil e com
                  qualidade
                </span>
              </Styles.ContainerCard>

              <Styles.ContainerCard>
                <img src="/img/icons/icon-16.png" />
                <Paragraph size="xxlarge" fontWeight="bold" color="white">
                  REGISTROS E APROVAÇÕES
                </Paragraph>
                <span>
                  Encaminhamos a rotulagem para regulamentação e registro junto
                  aos órgãos competentes (ANVISA)
                </span>
              </Styles.ContainerCard>

              <Styles.ContainerCard>
                <img src="/img/icons/icon-17.png" />
                <Paragraph size="xxlarge" fontWeight="bold" color="white">
                  PRODUÇÃO E ENVASE
                </Paragraph>
                <span>
                  Possuímos fábrica própria onde fazemos a produção e o envase
                  do seu produto com agilidade e rígidos padrões de qualidade
                </span>
              </Styles.ContainerCard>

              <Styles.ContainerCard>
                <img src="/img/icons/icon-18.png" />
                <Paragraph size="xxlarge" fontWeight="bold" color="white">
                  ENVIO DO PRODUTO
                </Paragraph>
                <span>
                  Com tudo pronto, encaminhamos o seu produto com segurança e
                  eficácia direto para o seu centro de distribuição
                </span>
              </Styles.ContainerCard>
            </Styles.Grid>

            <Button backgroundColor="white" color={theme.colors.black}>
              <Paragraph size="xxlarge" color="black" fontWeight="bold">
                REALIZE SEU SONHO
              </Paragraph>
            </Button>
          </Styles.ContainerInfo>
        </Styles.ContainerWrapper>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionSteps;
