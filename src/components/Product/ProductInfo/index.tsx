import Button from "components/Button";
import Paragraph from "components/Paragraph";
import Title from "components/Title";
import { useMemo, useState } from "react";
import { useTheme } from "styled-components";
import { useProduct } from "hooks/useProducts";
import { useRouter } from "next/router";
import pricesProduct from "../../../utils/pricesProduct";
import ProductItem from "../ProductItem";
import * as Styles from "./styles";

const ProductInfo = () => {
  const [data] = useState(pricesProduct);

  const router = useRouter();

  const memoIsBraip = useMemo(() => {
    return router.pathname.includes("/braip") ? true : false;
  }, [router]);

  const { productSelect: product, handleSelectProduct } = useProduct();

  const handleSelectedProduct = (id: string) => {
    const findProduct = data.find((item) => item.id === id);

    handleSelectProduct(findProduct as any);
  };

  const theme = useTheme();
  return (
    <Styles.Wrapper>
      <Title size="huge" color={theme.colors.primary}>
        AO ACORDAR, VOCÊ SABERÁ QUE FEZ A ESCOLHA CERTA.
      </Title>
      <Paragraph size="small" color={theme.colors.white}>
        Ressacaps é uma fórmula natural, ultraconcentrada de rápida absorção
        indicada para auxiliar.
      </Paragraph>

      <Styles.Spacings>
        <Paragraph size="large" fontWeight="bold" color={theme.colors.white}>
          Escolha seu combo
        </Paragraph>
      </Styles.Spacings>

      <Styles.ContainerSelect>
        {data.map((item) => (
          <Styles.SelectItem
            key={item.id}
            onClick={() => handleSelectedProduct(item.id)}
          >
            <ProductItem
              active={item.id === product?.id}
              title={`${item.title}`}
              price={`${item.priceCard}`}
              parties={`${item.parties}`}
              // discount={`${item.tag}`}
            />
          </Styles.SelectItem>
        ))}
      </Styles.ContainerSelect>

      {/* <Paragraph size="medium" color={theme.colors.white}>
        3x sem juros de{" "}
      </Paragraph> */}
      <Paragraph size="huge" fontWeight="bold" color={theme.colors.white}>
        {product?.installments}
      </Paragraph>
      <Paragraph size="medium" color={theme.colors.white}>
        à vista: {product?.price}
      </Paragraph>

      <Styles.Spacings>
        <Button size="large" backgroundColor={theme.colors.secondary}>
          <a
            target="_blank"
            href={memoIsBraip ? product.linkBraip : product?.link}
            rel="noreferrer"
          >
            COMPRAR AGORA
          </a>
        </Button>
      </Styles.Spacings>
    </Styles.Wrapper>
  );
};

export default ProductInfo;
