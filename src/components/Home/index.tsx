import React from "react";
import Layout from "components/Layout";
import MainSlider from "./MainSlider";
import ProductGallery from "components/Product/ProductGallery";
import { Container } from "components/Container";
import ProductInfo from "components/Product/ProductInfo";
import ProductCard from "components/Product/ProductCard";
import SectionAbout from "./SectionAbout";
import SectionProduct from "./SectionProduct";
import SectionDrunk from "./SectionDrunk";
import SectionListProducts from "./SectionListProducts";
import SectionFaq from "./SectionFaq";
import SectionInfos from "./SectionInfos";
import * as Styles from "./styles";
import { ProductProvider } from "hooks/useProducts";

const Home = () => {
  return (
    <Layout>
      <MainSlider />
      <Container>
        <ProductProvider>
          <Styles.SectionProductInfo id="buy-now">
            <ProductGallery />
            <ProductInfo />
          </Styles.SectionProductInfo>
        </ProductProvider>
      </Container>
      <SectionInfos />

      <SectionAbout />
      <SectionDrunk />
      <SectionProduct />
      <SectionListProducts />
      <SectionInfos />
      <SectionFaq />

      {/* <Container>
        <Styles.ContainerProductCard>
          {[0, 1, 2].map((item) => (
            <ProductCard key={item} />
          ))}
        </Styles.ContainerProductCard>
      </Container> */}
    </Layout>
  );
};

export default Home;
