import Button from "components/Button";
import { Container } from "components/Container";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useTheme } from "styled-components";
import CardFeature from "./CardFeature";
import * as Styles from "./styles";

const SectionFeatures = () => {
  const theme = useTheme();

  const data = [
    {
      id: "1",
      title: "PRODUÇÃO EM DIFERENTES ESCALAS",
      description:
        "Nossa infraestrutura e diversificação de equipamentos permite que possamos atender pequenas e grandes quantidades",
      icon: "/img/icons/icon-1.png",
    },
    {
      id: "2",
      title: " PRODUÇÃO PARA REDES",
      description:
        "Temos estrutura para atender redes de farmácia que desejam comercializar sua própria marca ",
      icon: "/img/icons/icon-2.png",
    },
    {
      id: "3",
      title: "TERCEIRIZAÇÃO FULL OU PARCIAL",
      description:
        "Você pode fornecer alguns materiais ou solicitar toda produção com a KEFF",
      icon: "/img/icons/icon-3.png",
    },
    {
      id: "4",
      title: "FRACIONAMENTO",
      description:
        "Algumas empresas têm a autorização para a distribuição de seus produtos, mas não podem manipulá-los. Para esses clientes, a KEFF oferece o serviço de fracionamento com segurança e confiabilidade.",
      icon: "/img/icons/icon-4.png",
    },
    {
      id: "5",
      title: "ASSESSORIA TÉCNICA E LEGAL",
      description:
        "Entre algumas orientações, estão: - Informações obrigatórias nos rótulos, - Testes exigidos legalmente, - Fórmula ideal para o produto desejado, Embalagem ideal para cada tipo de produto",
      icon: "/img/icons/icon-5.png",
    },
    {
      id: "7",
      title: "S.A.C COMPLETO",
      description:
        "Esclareça todas as dúvidas com os nossos profissionais e comande seu negócio com autoridade",
      icon: "/img/icons/icon-1.png",
    },
  ];
  return (
    <Styles.Wrapper>
      <Container>
        <Styles.ContainerInfo>
          <Title size="huge" align="center" bold color={theme.colors.tertiary}>
            A KEFF É SUA PARCEIRA
          </Title>

          <Paragraph size="xxlarge" color="black">
            Contamos com um time engajado e competente para te auxiliar em todas
            as etapas deste processo. Por isso a KEFF está preparada para te
            oferecer:
          </Paragraph>
        </Styles.ContainerInfo>
        <Styles.ContainerWrapper>
          {data.map((item) => (
            <CardFeature key={item.id} {...item} />
          ))}
        </Styles.ContainerWrapper>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionFeatures;
