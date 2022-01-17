import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div``;

export const Head = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 8rem;
    background: ${theme.colors.darkBlack};

    display: flex;
    align-items: center;

    ${media.lessThan("medium")`
      padding:${theme.spacings.xxsmall} 0;
    `}
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    max-width: ${theme.grid.container};
    margin: 0 auto;
    padding: 0rem calc(${theme.grid.gutter} / 2);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  `}
`;

export const ContainerInput = styled.div`
  ${({ theme }) => css`
    width: 50%;
  `}
`;

export const IconMenu = styled.div`
  ${() => css`
    position: absolute;
    z-index: 9;
    right: 1rem;
    top: 1rem;
  `}
`;

export const Menu = styled.nav`
  ${({ theme }) => css`
    display: flex;
    justify-content: space-evenly;
    position: relative;
  `}
`;

export const ItensMenu = styled.div<{ active?: boolean }>`
  ${({ theme, active = false }) => css`
    cursor: pointer;
    color: ${active ? theme.colors.primary : theme.colors.gray};
    text-align: center;
    font-size: 1.3rem;
    line-height: ${active ? "9rem" : "10rem"};
    border-top: 0.5rem solid ${active ? theme.colors.primary : "none"};
    padding-left: ${theme.spacings.xsmall};
    padding-right: ${theme.spacings.xsmall};

    ${media.lessThan("medium")`
          color:${theme.colors.white};
          &:hover {
            color:${theme.colors.white};
          }
      `}

    ${media.greaterThan("medium")`
        font-size: ${theme.font.sizes.medium};
        font-weight:300;
        
      &:hover {
        transition:.2s;
        border-top: .5rem solid ${theme.colors.primary};
        color: ${theme.colors.primary};
        line-height: 9rem;
      }
    `}
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    border-radius: 3rem;
    margin-left: ${theme.spacings.xsmall};
    margin-top: ${theme.spacings.xsmall};
    border: 0.2rem solid ${theme.colors.primary};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
