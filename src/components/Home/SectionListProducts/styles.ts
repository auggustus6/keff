import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 9rem 0rem 5rem;
  `}
`;

export const GridList = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    gap: 1rem;
  `}
`;

export const GridItem = styled.div`
  ${({ theme }) => css``}
`;
