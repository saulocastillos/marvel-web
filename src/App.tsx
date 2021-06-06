import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/GlobalStyle'

import Navbar from './components/Navbar'
import Routes from './routes'
import Footer from './components/Footer'

import { Container, NavSection, RouteSection, FooterSection } from './styles'

import useTheme from './hooks/useTheme'

function App() {
  const { theme } = useTheme()

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <NavSection>
          <Navbar />
        </NavSection>
        <RouteSection>
          <Routes />
        </RouteSection>
        <FooterSection>
          <Footer />
        </FooterSection>
      </Container>
    </ThemeProvider>
  )
}

export default App
