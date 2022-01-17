import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Container = styled.div`
  ${({ theme }) => css``}
`;

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;

    ${media.lessThan("medium")`
      flex-direction: column;
    `}
  `}
`;

export const Gallery = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: flex-start;
    flex-direction: column;

    ${media.lessThan("medium")`
      flex-direction: row;
    `}
  `}
`;

export const Thumbnail = styled.div<{ selected?: boolean }>`
  ${({ theme, selected }) => css`
    width: 60px;
    height: 60px;
    border: 0.3rem solid ${theme.colors.lightGray};
    margin-bottom: 1rem;
    padding: ${theme.spacings.xxsmall};
    background: ${theme.colors.white};
    border-radius: 0.3rem;
    cursor: pointer;
    transition: 0.5s;

    &:hover {
      border-color: ${theme.colors.primary};
    }

    ${!!selected &&
    css`
      border-color: ${theme.colors.primary};
    `}
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
    object-fit: contain;
  `}
`;

export const MainContainer = styled.div`
  ${({ theme }) => css`
    max-width: 500px;
    min-height: 500px;
    padding: ${theme.spacings.xsmall};
    margin: 0 ${theme.spacings.small};
    background: ${theme.colors.white};
    border-radius: 0.3rem;

    display: flex;
    align-items: center;

    ${media.lessThan("medium")`
      margin-left:0;
      margin-right:0;
    `}
  `}
`;

export const MainImage = styled.img`
  ${({ theme }) => css`
    width: 100%;
    height: 100%;
  `}
`;
