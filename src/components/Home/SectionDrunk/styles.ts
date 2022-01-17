import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.black};
    padding: 0rem 0 4rem;
  `}
`;

export const ContainerInfo = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;

    ${media.lessThan("large")`
      flex-direction: column;
    `}
  `}
`;

export const LeftSide = styled.div<{ viewText: boolean }>`
  ${({ theme, viewText }) => css`
    .textDrunk {
      color: transparent;
      text-shadow: 0 0 11px rgba(255, 255, 255, 0.5);
      margin-top: ${theme.spacings.xxlarge};
    }

    ${!!viewText &&
    css`
      .textDrunk {
        color: white;
        text-shadow: 0 0 1px rgba(255, 255, 255, 1);
      }
    `}
  `}
`;

export const ContainerPill = styled.div`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    margin-bottom: ${theme.spacings.small};

    img {
      max-width: 5rem;
      margin-left: 1rem;

      &:hover {
        transform: rotate(-90deg);
        transition: 0.1s;
      }
    }
  `}
`;

export const RightSide = styled.div`
  ${({ theme }) => css`
    img {
      max-width: 100%;
      width: 30rem;
    }
  `}
`;
