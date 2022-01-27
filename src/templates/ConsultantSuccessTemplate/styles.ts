import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Container } from "../../components/Container";

export const Wrapper = styled(Container)`
  ${({ theme }) => css`
    padding: 8.4rem 0;
    text-align: center;

    h2 {
      text-align: center;
    }

    p {
      margin-top: ${theme.spacings.large};
      margin-bottom: ${theme.spacings.xsmall};
    }
  `}
`;

export const ButtonContainer = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.small};

    button {
      font-size: ${theme.font.sizes.xlarge};
      font-family: ${theme.font.family};
      font-weight: 300;
      padding: ${theme.spacings.xxsmall} ${theme.spacings.xlarge};
      color: ${theme.colors.white};
      border-radius: 9rem;
      background: rgb(59, 140, 167);
      background: linear-gradient(
        90deg,
        rgba(59, 140, 167, 1) 0%,
        rgba(127, 210, 240, 1) 100%
      );
      animation: pulse 2s infinite;
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

export const Content = styled.div`
  ${({ theme }) => css``}
`;
