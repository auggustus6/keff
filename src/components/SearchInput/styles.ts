import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.input`
  ${({ theme }) => css`
    width: 100%;
    background-color: ${theme.colors.lightGray};
    font-size: ${theme.font.sizes.medium};
    border: 0;
    color: ${theme.colors.gray};
    border-radius: ${theme.border.radius};
    padding: 1rem;
    outline: none;

    ::placeholder {
      color: ${theme.colors.gray};
    }
  `}
`;
