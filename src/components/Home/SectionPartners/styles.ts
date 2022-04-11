import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    /* background-color: #aeaeae; */
    background-color: #9c89ff;
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
    flex: 0.5;
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
    max-width: 100%;

    ${media.lessThan("large")`
    max-width: 50%;
    `}
    ${media.lessThan("small")`
    max-width: 80%;
    `}
  `}
`;

export const SideImageBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex: 0.5;
    ${media.lessThan("large")`
    display: none;
    `}
  `}
`;

export const TopButtomImage = styled.div`
  ${({ theme }) => css`
    ${media.greaterThan("large")`
      display: none;
    `}
    ${media.lessThan("large")`
      display: flex;
      justify-content: center;
    `}
  `}
`;
