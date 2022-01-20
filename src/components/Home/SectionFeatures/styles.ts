import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 9rem 0rem;
    text-align: center;
  `}
`;

export const ContainerWrapper = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    gap: ${theme.spacings.small};
    margin-top: ${theme.spacings.small};

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
