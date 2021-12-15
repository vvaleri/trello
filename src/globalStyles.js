import { createGlobalStyle } from 'styled-components';
import Rubik from './assets/fonts/Rubik-Regular.woff';
import RubikMedium from './assets/fonts/Rubik-Medium.woff';
import RubikBold from './assets/fonts/Rubik-Bold.woff';

export const GlobalStyles = createGlobalStyle`

  @font-face {
    font-family: 'Rubik';
    src: url(${Rubik}) format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'RubikMedium';
    src: url(${RubikMedium}) format('woff');
    font-weight: medium;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: 'RubikBold';
    src: url(${RubikBold}) format('woff');
    font-weight: bold;
    font-style: normal;
    font-display: swap;
  }

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html, body {
    height: 100%;
  }

  body {
    overflow-x: hidden;
    font-family: Rubik, sans-serif;
    color: #3D4044;
  }
`;
