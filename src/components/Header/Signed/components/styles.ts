import styled, { css } from "styled-components";

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
