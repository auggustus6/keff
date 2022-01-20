import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 9rem 0rem;
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

export const Block = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-top: ${theme.spacings.small};

    img {
      width: 8rem;
      height: 8rem;
    }

    p {
      margin-left: ${theme.spacings.large};
    }

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

    .icon-certificate {
      max-width: 25%;
      margin: 0 auto;
      margin-bottom: ${theme.spacings.small};
    }

    ${media.lessThan("medium")`
      margin-left: 0;
    `}
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 50rem;
    object-fit: contain;
  `}
`;
