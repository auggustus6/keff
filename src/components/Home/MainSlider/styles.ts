import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: hidden;
    max-width: 1400px;
    margin: 0 auto;

    position: relative;

    .slick-arrow {
      display: flex !important;
      border-radius: 100%;
      align-items: center;
      justify-content: center;
      background: transparent;
      padding: ${theme.spacings.small};

      &:before {
        font-size: 3rem;
        color: ${theme.colors.white};
      }
    }
    .slick-next {
      right: 1rem;
    }

    .slick-prev {
      left: 1.8rem;
      z-index: 5;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    object-fit: cover;

    ${media.lessThan("medium")`
        max-width:100%;
    `}
  `}
`;

export const SliderContainer = styled.div`
  ${({ theme }) => css`
    ${media.lessThan("medium")`
     display:none;
    `}
  `}
`;

export const FormContainer = styled.div`
  ${({ theme }) => css`
    position: absolute;
    z-index: 100;
    width: 50%;

    ${media.lessThan("medium")`
        max-width:100%;
        width:100%;
        position:relative;
    `}
  `}
`;
