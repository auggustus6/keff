import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
  `}
`;

export const Main = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    max-width: 30rem;
  `}
`;

export const Tag = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.dangerDark};
    padding: 0.4rem ${theme.spacings.small};
    border-radius: 5rem;
    * {
      color: ${theme.colors.white};
    }
  `}
`;

export const ContainerTitle = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `}
`;

export const TagFree = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.primary};
    padding: 0.4rem ${theme.spacings.small};
    border-radius: 5rem;

    position: absolute;
    right: 0;
    * {
      color: ${theme.colors.white};
      font-size: ${theme.font.sizes.xsmall};
    }
  `}
`;
