import styled, { css } from "styled-components";
import media from "styled-media-query";

export const SectionProductInfo = styled.div`
  ${({ theme }) => css`
    display: flex;

    padding: 9rem 0 2rem;

    ${media.lessThan("medium")`
      flex-direction: column-reverse;
    `}
  `}
`;

export const ContainerProductCard = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
    gap: ${theme.spacings.large};
  `}
`;
