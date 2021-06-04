import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'
import Routes from './routes'

import useTheme from './hooks/useTheme'

function App() {
  const { switchTheme, theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes />
      {/*  <button
        type='button'
        onClick={() => {
          switchTheme()
        }}
      >
        Mudar Tema
      </button> */}
    </ThemeProvider>
  )
}

export default App
