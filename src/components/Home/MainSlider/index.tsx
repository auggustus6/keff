import React from "react";
import Slider from "react-slick";
import { FormCompleteContainer } from "../../Form/components/FormComplete";
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
        {/* <FormCompleteContainer /> */}
        <MailChimpFormContainer />
        {/* <div id="mc_embed_signup">
          <form
            action="https://keffbr.us14.list-manage.com/subscribe/post?u=ed5da9de447f44d3ebe2fcaf6&amp;id=b1c7d7f33e"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            className="validate"
            target="_blank"
          >
            <div id="mc_embed_signup_scroll">
              <h2>Preencha abaixo para ser atendido!</h2>
              <div className="indicates-required">
                <span className="asterisk">*</span> indicates required
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-FNAME">Nome </label>
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  className=""
                  id="mce-FNAME"
                />
              </div>
              <div className="mc-field-group size1of2">
                <label htmlFor="mce-EMAIL">
                  E-mail <span className="asterisk">*</span>
                </label>
                <input
                  type="email"
                  value=""
                  name="EMAIL"
                  className="required email"
                  id="mce-EMAIL"
                />
              </div>
              <div className="mc-field-group">
                <label htmlFor="mce-PHONE">Celular </label>
                <input
                  type="text"
                  name="PHONE"
                  className=""
                  value=""
                  id="mce-PHONE"
                />
              </div>

              <div className="mc-field-group size1of2">
                <label htmlFor="mce-EMAIL">
                  Voce trabalha com encapasulado?{" "}
                  <span className="asterisk">*</span>
                </label>
                <input
                  type="text"
                  value=""
                  name="FNAME"
                  className=""
                  id="mce-FNAME"
                />
              </div>

              <div id="mce-responses" className="clear foot">
                <div
                  className="response"
                  id="mce-error-response"
                  style={{ display: "none" }}
                ></div>
                <div
                  className="response"
                  id="mce-success-response"
                  style={{ display: "none" }}
                ></div>
              </div>
              <div
                style={{ position: "absolute", left: "-5000px" }}
                aria-hidden="true"
              >
                <input
                  type="text"
                  name="b_ed5da9de447f44d3ebe2fcaf6_b1c7d7f33e"
                  value=""
                />
              </div>
              <div className="optionalParent">
                <div className="clear foot">
                  <input
                    type="submit"
                    value="Enviar"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="button"
                  />
                </div>
              </div>
            </div>
          </form>
        </div> */}
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
