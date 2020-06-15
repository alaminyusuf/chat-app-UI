import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/Global'
import { theme } from './style/theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <h1>My React App</h1>
      </div>
    </ThemeProvider>
  )
}

export default App
