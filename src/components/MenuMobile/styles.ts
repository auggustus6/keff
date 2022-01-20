import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    width: 100%;
    height: 100%;

    position: fixed;
    top: 90px;
    z-index: 9;
    padding: ${theme.spacings.xxsmall};
  `}
`;

export const Header = styled.div`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xxsmall};
    padding-bottom: ${theme.spacings.xxsmall};
    margin-top: ${theme.spacings.xxsmall};
    border-bottom: 0.1rem solid ${theme.colors.lightGray};
  `}
`;

export const ContentAvatar = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
    }
  `}
`;

export const Avatar = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    background: ${theme.colors.white};
    border: 0.2rem solid ${theme.colors.primary};
    border-radius: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
  `}
`;

export const DataUser = styled.div`
  ${({ theme }) => css`
    margin-left: ${theme.spacings.xxsmall};
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.gray};

    display: flex;
    flex-direction: column;

    h4 {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.primary};
    }

    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
    }
  `}
`;

export const Content = styled.div`
  ${({ theme }) => css`
    overflow-y: auto;
    height: calc(100% - 130px);
  `}
`;

export const Card = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    padding: ${theme.spacings.small};
    border-radius: 0.2rem;
    box-shadow: 0.2rem 0.3rem 0.5rem rgba(0, 0, 0, 0.3);
    margin-bottom: ${theme.spacings.small};
    border: 0.15rem solid ${theme.colors.lightGray};

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    img {
      width: 5rem;
      height: 5rem;
      object-fit: cover;
    }
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    h4 {
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.primary};
    }

    span {
      font-size: ${theme.font.sizes.small};
      color: ${theme.colors.gray};
    }
  `}
`;
