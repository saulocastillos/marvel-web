import { createGlobalStyle, css } from 'styled-components'

const GlobalStyle = createGlobalStyle`${css`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
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
    background: ${({ theme }) => theme.colors.teal?.[100]};
    font-family: ${({ theme }) => theme.fontFamily};
    border: none;
    border-radius: ${({ theme }) => theme.borderRadius.base};
    :hover {
      background: ${({ theme }) => theme.colors.teal?.[200]};
    }
    cursor: pointer;
  }
`}
`

export default GlobalStyle
