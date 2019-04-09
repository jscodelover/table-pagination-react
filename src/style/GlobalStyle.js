import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
  *::after,
  *::before {
    margin: 0;
    padding: 0;  
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    line-height: 1.414;
    font-size: 1.6rem;
    font-weight: 300;
    color: #333;
    background-color: #fff;
  }
`;

export default GlobalStyle;
