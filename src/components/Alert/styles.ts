import styled, { css, DefaultTheme } from "styled-components";

const wrapperModifier = {
  success: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.primary};
  `,
  info: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.mainBg};
  `,
  error: (theme: DefaultTheme) => css`
    background-color: ${theme.colors.dangerDark};
  `,
};

type WrapperProps = {
  type: "success" | "info" | "error";
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, type }) => css`
    color: ${theme.colors.white};
    padding: 1rem;
    font-size: ${theme.font.sizes.xsmall};
    text-transform: uppercase;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0px 2px 2px 2px rgba(0, 0, 0, 0.3);
    width: 40rem;
    box-sizing: border-box;

    ${!!type && wrapperModifier[type](theme)};
  `}
`;
