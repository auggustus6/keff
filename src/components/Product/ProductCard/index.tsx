import Paragraph from "components/Paragraph";
import * as Styles from "./styles";

const ProductCard = () => {
  return (
    <Styles.Wrapper>
      <Styles.TagFree>
        <Paragraph size="medium">Frete Grátis</Paragraph>
      </Styles.TagFree>

      <Styles.Main>
        <Styles.Image src="https://www.reviv.com.br/arquivos/produto01.jpg?v=637685202364500000" />
      </Styles.Main>

      <Styles.ContainerTitle>
        <Paragraph size="xlarge" fontWeight="bold">
          COMBOS COMPORTADOS
        </Paragraph>
        <Styles.Tag>
          <Paragraph size="medium">-7% OFF</Paragraph>
        </Styles.Tag>
      </Styles.ContainerTitle>
      <Paragraph size="medium">6 packs - R$13,90/un</Paragraph>
      <Paragraph size="medium">3x de R$27,80 s/juros</Paragraph>
      <Paragraph size="medium">R$ 83,40</Paragraph>
    </Styles.Wrapper>
  );
};

export default ProductCard;
