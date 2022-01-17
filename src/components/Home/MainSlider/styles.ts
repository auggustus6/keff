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
