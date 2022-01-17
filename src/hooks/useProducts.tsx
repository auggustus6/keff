import { useContext, createContext, useState } from "react";
import pricesProduct from "../utils/pricesProduct";
import productPrices from "../utils/pricesProduct";

type ProductContextType = {
  productSelect: typeof productPrices[0];
  handleSelectProduct: (product: typeof productPrices[0]) => void;
};

const ProductContext = createContext<ProductContextType>(
  {} as ProductContextType,
);

export const ProductProvider: React.FC = ({ children }) => {
  const [productSelect, setProductSelect] = useState(pricesProduct[0]);

  const handleSelectProduct = (product: typeof productPrices[0]) => {
    setProductSelect(product);
  };
  return (
    <ProductContext.Provider value={{ productSelect, handleSelectProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProduct = () => {
  return useContext(ProductContext);
};
