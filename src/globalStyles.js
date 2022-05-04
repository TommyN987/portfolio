import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  html {
    box-sizing: border-box;
  }

  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  h1,h2,h3,h4,h5,h6 {
    display: inline-block;
    margin: 0;
    padding: 0;
  }

  body {
    overflow-x: hidden;
    font-family: 'Mulish', sans-serif;
  }
`

export default GlobalStyle;