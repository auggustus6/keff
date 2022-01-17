import Paragraph from "components/Paragraph";
import { NextPage } from "next";
import { useTheme } from "styled-components";
import * as Styles from "./styles";

type ProductItemProps = {
  active?: boolean;
  title: string;
  price: string;
  discount?: string;
  parties: string;
};

const ProductItem: NextPage<ProductItemProps> = ({
  active = false,
  title,
  price,
  parties,
  discount,
}) => {
  const theme = useTheme();
  return (
    <Styles.Wrapper active={active}>
      <Paragraph size="large" fontWeight="bold" color={theme.colors.white}>
        {title}
      </Paragraph>
      <Paragraph size="small" color={theme.colors.white}>
        {parties}
      </Paragraph>{" "}
      <Paragraph size="medium" color={theme.colors.white}>
        {price}
      </Paragraph>
      {discount && (
        <Styles.ContainerDiscount>
          <Paragraph size="medium" color={theme.colors.white}>
            {discount}
          </Paragraph>
        </Styles.ContainerDiscount>
      )}
    </Styles.Wrapper>
  );
};

export default ProductItem;
