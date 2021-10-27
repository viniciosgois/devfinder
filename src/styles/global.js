import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Noto Sans Mono', monospace;
<<<<<<< HEAD
    color: ${props => props.theme.fontColor};;
=======
    color: #fff;
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444

    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
<<<<<<< HEAD
    background: ${props => props.theme.body};
=======
    background: #131c2f;
>>>>>>> ac8d9ab4bdd36b8e7342b0c951ec909218236444
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    cursor: pointer;
  }

`;
