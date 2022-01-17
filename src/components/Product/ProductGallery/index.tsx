import { useProduct } from "hooks/useProducts";
import { useState } from "react";
import pricesProduct from "utils/pricesProduct";
import * as Styles from "./styles";

const ProductGallery = () => {
  const [data] = useState(pricesProduct);

  const { productSelect: selected, handleSelectProduct } = useProduct();

  return (
    <Styles.Container>
      <Styles.Wrapper>
        <Styles.Gallery>
          {data.map((item, index) => (
            <Styles.Thumbnail
              key={index}
              onClick={() => handleSelectProduct(item as any)}
              selected={selected.id === item.id}
            >
              <Styles.Image src={item.img} />
            </Styles.Thumbnail>
          ))}
        </Styles.Gallery>

        <Styles.MainContainer>
          <Styles.MainImage src={selected.img} />
        </Styles.MainContainer>
      </Styles.Wrapper>
    </Styles.Container>
  );
};

export default ProductGallery;
