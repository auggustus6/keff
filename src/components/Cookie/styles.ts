import media from "styled-media-query";
import styled, { css } from "styled-components";

export const Wrapper = styled.div<{ cookieDisplay: string }>`
  ${({ cookieDisplay }) => css`
    position: fixed;
    display: none;
    z-index: 999;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: visible;
    background-color: white;
    /* display: ${cookieDisplay}; */
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    padding: ${theme.spacings.small};
    padding-top: ${theme.spacings.small};
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      margin-left: ${theme.spacings.xsmall};
      font-size: ${theme.font.sizes.small};
      padding: 0.8rem 2rem;
    }

    ${media.lessThan("medium")`
        padding: ${theme.spacings.xsmall};
        flex-direction:column;
        justify-content: center ;
        align-items: center;
        button{
          margin: ${theme.spacings.small} 0;
          margin-bottom: ${theme.font.sizes.xsmall};
        }
    `}
  `}
`;

export const Block = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h4 {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.black};
      font-weight: ${theme.font.bold};
    }

    span {
      display: inline-block;
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.black};
      font-weight: ${theme.font.normal};
    }

    a {
      color: ${theme.colors.black};
      margin-left: ${theme.spacings.xxsmall};
    }

    ${media.lessThan("medium")`
      padding-top: 1rem;
      h4 {
        font-size:${theme.font.sizes.xlarge};
      }
      span {
      font-size: ${theme.font.sizes.xsmall};
      }
    `}
  `}
`;
