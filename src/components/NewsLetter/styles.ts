import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css``}
`;

export const ContentForm = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    margin-top: ${theme.spacings.small};

    input {
      flex: 0.5;
      padding: ${theme.spacings.xsmall};
      border-radius: ${theme.border.radius} 0 0 ${theme.border.radius};
      border: 0;
      background: ${theme.colors.lightGray};
    }

    button {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      width: 12rem;
      font-size: ${theme.font.sizes.small};
      text-transform: uppercase;
      border: 0.1rem solid ${theme.colors.primary};
      height: 100%;
      padding: ${theme.spacings.xsmall};
      border-radius: 0 ${theme.border.radius} ${theme.border.radius} 0;
      border: 0;
    }

    ${media.lessThan("medium")`
      flex-direction:column;

      input {
        width: 100%;
        border-radius:${theme.border.radius};
      
      }
      button{
        margin-top:${theme.spacings.small};
        width:100%;
        border-radius:${theme.border.radius};
      }
    `}
  `}
`;
