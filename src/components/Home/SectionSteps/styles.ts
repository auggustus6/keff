import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: #aeaeae;
    padding: 9rem 0rem;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(30rem, 1fr));
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.large};
  `}
`;

export const ContainerCard = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    cursor: pointer;
    img {
      max-width: 80%;
    }

    &:hover {
      span {
        display: block;
      }
    }

    span {
      display: none;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.black};
      border-radius: 10rem;
      background: rgba(255, 255, 255, 0.8);
      padding: ${theme.spacings.small};

      ${media.lessThan("medium")`
        display: block;
      `}
    }
  `}
`;

export const ContainerWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;

    ${media.lessThan("large")`
      flex-direction: column;
    `}
  `}
`;

export const ContainerInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    margin-left: ${theme.spacings.small};

    button {
      align-self: center;
      margin-top: ${theme.spacings.small};
    }

    p {
      margin: ${theme.spacings.xsmall} 0;
    }

    ${media.lessThan("medium")`
    margin-left: 0;

    h2 {
    margin-top:${theme.spacings.small};

    }
    `}
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css``}
`;
