import styled, { css } from "styled-components";
import media from "styled-media-query";

type WrapperProps = {
  active?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, active }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    width: 100%;
    cursor: pointer;
    position: relative;

    border: 0.15rem solid ${theme.colors.gray};
    padding: ${theme.spacings.xsmall};
    border-radius: 1rem;

    &:hover {
      border-color: ${theme.colors.primary};
    }

    ${!!active &&
    css`
      border-color: ${theme.colors.primary};
    `}
  `}
`;

export const ContainerDiscount = styled.div`
  ${({ theme }) => css`
    position: absolute;
    padding: ${theme.spacings.xxsmall};
    border-radius: 2rem;
    top: -2rem;

    p {
      font-size: 1.2rem;
    }

    background-color: ${theme.colors.secondary};

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
