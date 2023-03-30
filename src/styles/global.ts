import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${(props) => props.theme['primary-800']};
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
  }

  body, input, textarea, button {
    font: 400 1rem "Inter", sans-serif;
  }
`
