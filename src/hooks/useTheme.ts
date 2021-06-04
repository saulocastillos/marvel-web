import { DefaultTheme as DefaultThemeType } from 'styled-components'
import { useEffect, useState } from 'react'

import { lightTheme, darkTheme } from '../styles/themes'

const useTheme = () => {
  const [theme, setTheme] = useState<DefaultThemeType>(lightTheme)

  function switchTheme() {
    if (theme?.name === 'light') {
      setTheme(darkTheme)
      console.log('setou dark')
    } else {
      setTheme(lightTheme)
      console.log('setou light')
    }
  }

  return { theme, switchTheme }
}

export default useTheme
