import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans Mono', monospace;
    color: ${props => props.theme.fontColor};
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${props => props.theme.body};
    display: flex;
    justify-content: center;
    align-items: center;
    
  }
  
  button {
    cursor: pointer;
  }

  `