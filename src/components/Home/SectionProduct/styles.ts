import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: 9rem 0 12rem;
    margin: 0 auto;
    text-align: center;
  `}
`;

export const Grid = styled.div`
  ${({ theme }) => css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(50rem, 1fr));
    gap: 5rem;

    position: relative;
    margin-top: 9rem;

    ${media.lessThan("medium")`
    grid-template-columns: repeat(auto-fit, minmax(18rem, 1fr));
    
    `}
  `}
`;

export const GridItem = styled.div`
  ${({ theme }) => css`
    max-width: 50%;
    margin: auto;
    img {
      max-width: 100%;
      width: 15rem;
      height: 15rem;
      object-fit: cover;
      border-radius: 5rem;
      border: 2px solid #e2e729;
    }
  `}
`;

export const Image = styled.img`
  ${({ theme }) => css`
    position: sticky;
    max-width: 50rem;
    margin: 0 auto;
    left: 0;
    right: 0rem;
    top: 0;

    ${media.lessThan("medium")`
      display: none;
    `}
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.large};
  `}
`;
