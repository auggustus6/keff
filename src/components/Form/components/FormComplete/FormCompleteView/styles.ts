import styled, { css } from "styled-components";
import media from "styled-media-query";
import { Container as Wrapper } from "../../../../Container";

export const Container = styled(Wrapper)`
  ${({ theme }) => css`
    display: flex;
    background: rgba(255, 255, 255, 0.9);
    max-width: 60%;
    border-radius: 5px;

    align-items: center;
    justify-content: center;
    flex-direction: column;

    padding: ${theme.spacings.small};

    h4 {
      margin-bottom: ${theme.spacings.small};
      font-size: ${theme.font.sizes.xxlarge};
    }

    ${media.lessThan("medium")`
      max-width:none;
    `}

    form {
      display: flex;
      flex-direction: column;
      align-items: center;

      input,
      select {
        width: 100%;
        padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
        margin-bottom: ${theme.spacings.xsmall};
      }

      span {
        font-size: ${theme.font.sizes.small};
        margin-bottom: ${theme.spacings.xsmall};
      }

      button {
        width: 100%;
        border-radius: 5px;
        padding: ${theme.spacings.xsmall};
        background: ${theme.colors.primary};
        color: ${theme.colors.white};
        font-weight: bold;
      }
    }
  `}
`;
