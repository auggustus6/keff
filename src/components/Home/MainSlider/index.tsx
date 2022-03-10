import React from "react";
import Slider from "react-slick";
import { MailChimpFormContainer } from "../../Form/components/FormComplete/MailChimpForm";
import * as Styles from "./styles";

const settings = {
  dots: true,
  arrows: true,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  speed: 1000,
  autoplaySpeed: 8000,
  cssEase: "linear",
};
const MainSlider = () => {
  return (
    <Styles.Wrapper id="quero_comecar">
      <Styles.FormContainer>
        <MailChimpFormContainer />
      </Styles.FormContainer>
      <Styles.SliderContainer>
        <Slider {...settings}>
          <Styles.Image
            src="img/banner-2.jpg"
            alt="farmaceutica manipulando encapasulado."
          />
        </Slider>
      </Styles.SliderContainer>
    </Styles.Wrapper>
  );
};

export default MainSlider;
