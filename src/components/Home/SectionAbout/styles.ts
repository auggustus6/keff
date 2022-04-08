import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 9rem 0rem;
    background-color: #efebff;
    ${media.lessThan("medium")`
    padding: 9rem 0rem 0rem;
    `}
  `}
`;

export const WrapperContent = styled.div`
  ${({ theme }) => css``}
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
    /* background-color: #ded8ff; */

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

export const ButtonBox = styled.div`
  ${({ theme }) => css`
    ${media.lessThan("small")`
  margin-bottom: 92px;
    `}
  `}
`;

export const ImageBox = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 50%;

    ${media.lessThan("small")`
    max-width: 80%;
    `}
  `}
`;
