import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    border: 0.5rem solid ${theme.colors.primary};
    border-radius: 0.3rem;

    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `}
`;

export const Head = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    text-align: center;
    padding: ${theme.spacings.xxsmall};
    h2 {
      font-size: 3.1rem;
    }
  `}
`;

export const Body = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xsmall};
    position: relative;

    img {
      max-width: 100%;
    }

    .tag-price {
      background: ${theme.colors.primary};
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.small};
      padding: ${theme.spacings.xxsmall};
      border-radius: 4rem;
      max-width: 16rem;
      text-align: center;
      position: absolute;
      left: 1rem;
    }

    ul {
      list-style: none;
      padding-left: 0;
      margin-left: 0;
      line-height: 2.4rem;

      li {
        display: flex;
        align-items: center;
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.small};
        margin-bottom: ${theme.spacings.xxsmall};

        svg {
          margin-right: ${theme.spacings.xxsmall};
        }
      }
    }
  `}
`;

export const Block = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-top: ${theme.spacings.small};

    .from {
      font-size: ${theme.font.sizes.xxxlarge};
      color: ${theme.colors.primary};
      font-weight: bold;
    }

    .to {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.white};
    }

    .dose {
      color: ${theme.colors.primary};
    }
  `}
`;

export const Footer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: ${theme.spacings.xsmall};
  `}
`;
