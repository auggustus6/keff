import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    height: 100vh;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    margin: 0px ${theme.spacings.large};
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 450px;
      max-width: 100%;
    }

    ${media.lessThan("medium")`
    flex-direction: column;
    `}
  `}
`;

export const Text = styled.div`
  ${({ theme }) => css`
    padding-left: 10px;
    color: black;
    width: 350px;
    max-width: 100%;
    text-shadow: 0.01px 0.01px #030303;

    h1 {
      padding-bottom: ${theme.spacings.xsmall};
      font-weight: ${theme.font.bold};
    }

    p {
      padding-bottom: ${theme.spacings.xsmall};
      font-weight: ${theme.font.normal};
      font-size: ${theme.font.sizes.small};
    }

    a {
      color: ${theme.colors.white};
      text-decoration: none;
    }

    ${media.lessThan("medium")`
      padding: 0px ${theme.spacings.small};
      display:flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      
      p {
        text-align: center;
      }

      button{
        margin-bottom: 13px ;
      }
    `}

    ${media.lessThan("small")`      
      width: 200px;   
        
      button{
        font-size: 10px;
      }
    `}
  `}
`;
