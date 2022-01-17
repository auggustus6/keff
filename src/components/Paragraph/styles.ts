import styled, { css } from "styled-components";
import media from "styled-media-query";
import { ParagraphProps } from ".";

export const Paragraph = styled.p<ParagraphProps>`
  ${({ theme, size, color = "white", fontWeight = "normal" }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${color ? color : theme.colors.black};
    font-weight: ${fontWeight};
  `}
`;
