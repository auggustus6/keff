import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  border-bottom: 2rem solid ${({ theme }) => theme.colors.primary};
`;

export const Head = styled.div`
  ${({ theme }) => css`
    position: relative;
    min-height: 8rem;

    display: flex;
    align-items: center;
    justify-content: space-between;

    ${media.lessThan("medium")`
      padding:${theme.spacings.xxsmall} 0;
    `}
  `}
`;
export const Content = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
  `}
`;

export const ContainerInput = styled.div`
  ${({ theme }) => css`
    width: 50%;
  `}
`;

export const IconMenu = styled.div`
  ${() => css``}
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

    display: flex;
    align-items: center;

    ${media.lessThan("medium")`
          color:${theme.colors.white};
          &:hover {
            color:${theme.colors.white};
          }
      `}

    ${media.greaterThan("medium")`
        font-size: ${theme.font.sizes.xlarge};
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

export const ContainerLogin = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.small} ${theme.spacings.xlarge};
    height: 5rem;

    align-self: center;
    border-radius: 9rem;
    background: ${theme.colors.white};
    animation: pulse 2s infinite;
    color: ${theme.colors.black};
    border: 2px solid #ccc;

    display: flex;
    align-items: center;
    justify-content: center;

    a {
      display: flex;
      align-items: center;
      cursor: pointer;
    }

    @keyframes pulse {
      0% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.7);
      }

      70% {
        transform: scale(1);
        box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
      }

      100% {
        transform: scale(0.95);
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
      }
    }
  `}
`;
