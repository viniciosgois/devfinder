import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans Mono', monospace;
    color: #fff;

    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: #131c2f;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

`;
