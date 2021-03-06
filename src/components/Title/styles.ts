import styled, { css } from "styled-components";
import media from "styled-media-query";
import { TitleProps } from ".";

export const Title = styled.h2<TitleProps>`
  ${({ theme, size, color, bold, align }) => css`
    font-size: ${theme.font.sizes[size]};
    color: ${color ? color : theme.colors.black};
    text-transform: uppercase;
    font-weight: ${bold ? "bold" : "normal"};
    line-height: 1.2;
    text-align: ${align ? align : "left"};
  `}
`;
