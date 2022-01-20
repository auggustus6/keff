import styled, { css, DefaultTheme } from "styled-components";
import { darken } from "polished";
import { ButtonProps } from ".";
import media from "styled-media-query";

export const Wrapper = styled.button<ButtonProps>`
  ${({ theme, disabled, fullWidth, backgroundColor, color }) => css`
    background: ${disabled
      ? theme.colors.lightGray
      : backgroundColor
      ? backgroundColor
      : theme.colors.primary};
    color: ${color ? color : theme.colors.white};
    min-height: 3.2rem;
    border: 0;
    font-size: ${theme.font.sizes.small};
    border-radius: 5rem;
    font-size: ${theme.font.sizes.xlarge};
    font-weight: bold;

    width: ${fullWidth ? "100%" : "50%"};
    padding: ${theme.spacings.xsmall} ${theme.spacings.large};
    animation: pulse 2s infinite;

    &:hover {
      background-color: ${darken(0.5, theme.colors.secondary)};
      transition: 0.5s;
    }

    ${media.lessThan("medium")`
      width:100%;
    `}

    a {
      color: inherit;
      text-decoration: none;
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
