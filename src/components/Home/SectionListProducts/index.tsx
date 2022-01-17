import { Container } from "components/Container";
import ProductCardList from "components/Product/ProductCardList";
import Title from "components/Title";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import { useTheme } from "styled-components";
import pricesProduct from "../../../utils/pricesProduct";
import * as Styles from "./styles";

const SectionListProducts = () => {
  const [data] = useState(pricesProduct);
  const router = useRouter();

  const memoIsBraip = useMemo(() => {
    return router.pathname.includes("/braip") ? true : false;
  }, [router]);

  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Container>
        <Title size="huge" color={theme.colors.white}>
          Já vai começar? <br></br>Mas antes...<br></br>Ressacaps
        </Title>

        <Styles.GridList>
          {data.map((item) => (
            <ProductCardList
              key={item.id}
              title={`${item.title} Ressacaps`}
              imageSource={item.img}
              price={`${item.price}`}
              link={memoIsBraip ? item.linkBraip : item.link}
              installments={`${item.installments}`}
              tag={item.tag && item.tag}
              priceSize={item.id != "1" ? item.pricePocket : ""}
            />
          ))}
        </Styles.GridList>
      </Container>
    </Styles.Wrapper>
  );
};

export default SectionListProducts;
