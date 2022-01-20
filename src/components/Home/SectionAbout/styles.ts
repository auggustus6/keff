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
  ${({ theme }) => css`
    max-width: 50%;
  `}
`;