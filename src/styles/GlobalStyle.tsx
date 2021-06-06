import { createGlobalStyle, css } from 'styled-components'

import Bebas from '../assets/fonts/Bebas-Regular.ttf'
import MarvelRegular from '../assets/fonts/Marvel-Regular.ttf'

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  @font-face {
    font-family: 'Marvel';
    src: url(${Bebas});
  }

  @font-face {
    font-family: 'MarvelRegular';
    src: url(${MarvelRegular});
  }

  html {
    font-size: 16px;
  }

  html,
  body {
    height: 100%;
  }

  body,
  input,
  button {
    color: ${({ theme }) => theme.textColor};
    font-family: ${({ theme }) => theme.fontFamily};
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    transition: all 0.25s linear;
    -webkit-font-smoothing: antialiased !important;
  }

  button {
    border: none;
    background: ${({ theme }) => theme.backgroundColor};
    opacity: 0.4;
    :hover {
      opacity: 1;
    }
    cursor: pointer;
  }
`}
`

export default GlobalStyle
