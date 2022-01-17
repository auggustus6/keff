import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.black};
    width: 100%;
    cursor: pointer;
    border-radius: 0.8rem;
    border: 1px solid ${theme.colors.secondary};
  `}
`;

export const ContainerInfo = styled.div`
  ${({ theme }) => css`
    padding: 1rem;

    display: flex;
    flex-grow: 0;
    align-items: center;
    justify-content: space-between;
    border-radius: 0.2rem;
  `}
`;

export const Block = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.gray};
    padding: 1rem;
    border-radius: 0.2rem;
  `}
`;
