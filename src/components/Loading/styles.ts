import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    width: 50%;
    height: 1rem;
    max-height: 10rem;
    margin: 0 auto;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;
