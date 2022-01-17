import {
  createGlobalStyle,
  css,
  DefaultTheme,
  GlobalStyleComponent,
} from "styled-components";

type GlobalStylesProps = {
  removeBg?: boolean;
};

const GlobalStyles: GlobalStyleComponent<
  GlobalStylesProps,
  DefaultTheme
> = createGlobalStyle`
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 300;
      font-display: swap;
      src: local('Poppins Light'), local('Poppins-Light'),
          url('/fonts/poppins-v12-latin-300.woff2') format('woff2');
    }
  
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      font-display: swap;
      src: local('Poppins Regular'), local('Poppins-Regular'),
          url('/fonts/poppins-v12-latin-regular.woff2') format('woff2');
    }
  
    @font-face {
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 600;
      font-display: swap;
      src: local('Poppins SemiBold'), local('Poppins-SemiBold'),
          url('/fonts/poppins-v12-latin-600.woff2') format('woff2');
    }
  
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  
      &::before,
      &::after {
        box-sizing: inherit;
      }
    }

    .fluid-image {
      max-width: 100%;
    }
  
    ${({ theme }) => css`
      html {
        font-size: 62.5%;
        scroll-behavior: smooth;
      }

      input {
        outline:none;
      }

      button {
        border:0;
        cursor:pointer;
        outline:none;
      }

    /* Table */
      table {
      border-collapse: collapse;
      width: 100%;

      tr {
        cursor: pointer;
      }
    }

    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
      font-size: ${theme.font.sizes.small};
    }

    tr:nth-child(even) {
      background-color: #dddddd;
    }

    .swal-confirm {
      background-color: ${theme.colors.primary} !important;
    }

    .swal-danger {
      background-color: ${theme.colors.dangerDark} !important;
      color: ${theme.colors.white} !important;
    }

    .swal-cancel {
      background-color: ${theme.colors.lightGray} !important;
      color: ${theme.colors.gray} !important;
    }


      body {
        background:${theme.colors.mainBg};
        font-family: ${theme.font.family};
        font-size: ${theme.font.sizes.medium};
    `}
  `;

export default GlobalStyles;
