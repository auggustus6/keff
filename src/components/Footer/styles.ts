import styled, { css } from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: relative;
    background: #fafafa;
  `}
`;

export const Container = styled.div`
  ${({ theme }) => css`
    max-width: 130rem;
    padding: ${theme.spacings.medium};
    padding-top: ${theme.spacings.xxlarge};
    margin: 0 auto;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;

    ${media.lessThan("medium")`
        flex-direction:column;
    `}
  `}
`;

export const Block = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: column;

    h4 {
      font-size: ${theme.font.sizes.xxlarge};
      margin-bottom: ${theme.spacings.xsmall};
      color: ${theme.colors.gray};
      font-weight: 300;
    }

    span {
      display: inline-block;
      font-size: ${theme.font.sizes.large};
      color: ${theme.colors.gray};
      margin-bottom: ${theme.spacings.xsmall};
      font-weight: 300;
    }

    .terms {
      display: flex;
      align-items: flex-start;
      flex-direction: column;

      span {
        cursor: pointer;
        font-size: ${theme.font.sizes.small};

        &:hover {
          text-decoration: underline;
        }
      }
    }

    :last-child {
      ${Social} {
        margin-bottom: ${theme.spacings.large};
      }
    }

    .span-last {
      margin-top: ${theme.spacings.medium};
    }

    ${Social} {
      img {
        :first-child {
          margin-right: ${theme.spacings.xxsmall};
        }
      }
    }

    ${media.lessThan("medium")`
      padding-top: 3rem;
      h4 {
        font-size:${theme.font.sizes.xlarge};
      }
      span {
      font-size: ${theme.font.sizes.small};
      }
    `}
  `}
`;

export const Social = styled.div`
  ${({ theme }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: ${theme.spacings.xxsmall};

    a {
      display: flex;
      align-items: center;
      outline: none;
      cursor: pointer;
      text-decoration: none;
    }

    img {
      width: 3rem;
      height: 3rem;
    }

    span {
      display: block;
      margin-bottom: 0;
      font-size: ${theme.font.sizes.small};
    }
  `}
`;

export const Copyright = styled.div`
  ${({ theme }) => css`
    background: #fafafa;

    * {
      font-size: ${theme.font.sizes.xsmall};
      color: ${theme.colors.gray};
    }

    img {
      width: 2rem;
    }

    ${Container} {
      padding: ${theme.spacings.xsmall};
      display: flex;
      align-items: center;
      justify-content: space-between;

      span {
        display: flex;
        align-items: center;
        font-size: ${theme.font.sizes.xsmall};
      }
    }

    ${media.lessThan("medium")`
        text-align:center;
        align-items:center;
        justify-content:center;
        flex-direction:column;

        span {
          flex-direction:column;
          text-align:center;
        }
        .span-copyright {
          width:100%;
          flex-direction:row;
          justify-content:center;
          flex-wrap:wrap;
          margin:${theme.spacings.xxsmall} 0;
      }
      img {
        margin-top:${theme.spacings.xxsmall};
        width:3rem;
        height:3rem;
        object-fit:contain;
      }
    `}
  `}
`;

export const BackgroundArrow = styled.div`
  ${() => css`
    background-image: url("/img/bg_footer.png");
    position: absolute;
    background-size: contain;
    height: 5rem;
    top: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 100%;
    max-width: 200rem;
    background-position-x: 50%;
    background-repeat-y: no-repeat;

    ${media.lessThan("medium")`
    background-size: cover;
    `}
  `}
`;
