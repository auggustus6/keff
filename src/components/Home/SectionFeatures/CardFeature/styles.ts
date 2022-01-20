import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    border: 1px solid #ccc;
    border-radius: 2rem;
    background: ${theme.colors.white};
    box-shadow: 2px 2px 5px #ccc;
    padding: ${theme.spacings.small};
    transition: opacity 1s;

    &:hover {
      ${HideContainer} {
        display: block;
        opacity: 1;
      }
    }

    h2,
    p {
      text-align: center;
    }
    img {
      width: 15rem;
      height: 15rem;
      object-fit: contain;
      margin-bottom: ${theme.spacings.small};
    }
  `}
`;

export const HideContainer = styled.div`
  ${({ theme }) => css`
    display: none;
    opacity: 0;
  `}
`;
