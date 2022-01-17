import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-evenly;

    padding: 3rem 0;

    ${media.lessThan("medium")`
      flex-direction: column;
    `}
  `}
`;

export const Block = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    p {
      text-transform: uppercase;
      line-height: 3.5rem;
      text-align: center;
      margin-left: ${theme.spacings.small};

      span {
        font-weight: bold;
      }
    }

    ${media.lessThan("medium")`
      margin-bottom: ${theme.spacings.large};
    `}
  `}
`;
