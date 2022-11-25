import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }

  button {
    font-family: 'Inter', sans-serif;
    cursor: pointer;
  }
  
  html, body, #__next {
    height: 100%;
  }
  body {
    font-family: 'Inter', sans-serif;
    font-size: 1.6rem;
  }
`;

export default GlobalStyles;
