import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${(props) => props.theme.white};
    -webkit-font-smoothing: antialiased;
  }

  a {
    transition: 0.2s;
    text-decoration: none;
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }
`
