import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    flex: 1;
    width: 100%;

    ul {
      margin: ${theme.spacings.xsmall} 0;
      line-height: 2.7rem;
      margin-left: ${theme.spacings.small};

      li {
        color: ${theme.colors.white};
        font-size: ${theme.font.sizes.small};
      }
    }
  `}
`;

export const ContainerSelect = styled.div`
  ${({ theme }) => css`
    max-width: 65%;

    ${media.lessThan("medium")`
      max-width: 100%;
    `}
  `}
`;

export const SelectItem = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0px;
  `}
`;

export const Spacings = styled.div`
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`;
