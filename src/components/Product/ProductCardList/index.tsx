import Title from "components/Title";
import { useTheme } from "styled-components";
import * as Styles from "./styles";
import { CgPill } from "react-icons/cg";
import Button from "components/Button";

type ProductCardListProps = {
  title: string;
  imageSource: string;
  price: string;
  installments: string;
  link: string;
  tag: string;
  priceSize?: string;
};

const ProductCardList = ({
  title,
  imageSource,
  price,
  installments,
  link,
  tag,
  priceSize,
}: ProductCardListProps) => {
  const theme = useTheme();

  return (
    <Styles.Wrapper>
      <Styles.Head>
        <Title color={theme.colors.secondary} size="xxlarge">
          {title}
        </Title>
      </Styles.Head>

      <Styles.Body>
        <img src={imageSource} />
        {tag && <span className="tag-price">{tag}</span>}

        <ul>
          <li>
            <CgPill size={18} color="#fff" />
            Promove mais energia e disposição
          </li>

          <li>
            <CgPill size={18} color="#fff" />
            Reduz a desidratação
          </li>

          <li>
            <CgPill size={18} color="#fff" />
            Protege seu organismo
          </li>

          <li>
            <CgPill size={18} color="#fff" />
            Não contém açúcares e edulcorantes
          </li>
        </ul>

        <Styles.Block>
          <span className="dose"> {priceSize}</span>
          <span className="from">{installments}</span>
          <span className="to">à vista: {price}</span>
        </Styles.Block>
      </Styles.Body>

      <Styles.Footer>
        <Button size="large" backgroundColor={theme.colors.secondary}>
          <a target="_blank" href={link} rel="noreferrer">
            COMPRAR AGORA
          </a>
        </Button>
      </Styles.Footer>
    </Styles.Wrapper>
  );
};

export default ProductCardList;
