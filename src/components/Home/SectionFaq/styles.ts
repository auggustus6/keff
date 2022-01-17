import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: 5rem 0;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.medium} 0;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(90rem, 1fr));
    gap: 2rem;

    ${media.lessThan("medium")`
      display:block;
    `}
  `}
`;
