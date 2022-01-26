import Slider from "react-slick";
import { FormCompleteContainer } from "../../Form/components/FormComplete";
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
        <FormCompleteContainer />
      </Styles.FormContainer>
      <Styles.SliderContainer>
        <Slider {...settings}>
          {/* <Styles.Image src="img/banner-1.png" alt="garota mexendo no celular" /> */}
          <Styles.Image
            src="img/banner-2.png"
            alt="farmaceutica manipulando encapasulado."
          />
        </Slider>
      </Styles.SliderContainer>
    </Styles.Wrapper>
  );
};

export default MainSlider;
