import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/Global'
import { theme } from './style/theme'

import Home from './components/pages/Home'
import SideBar from './components/pages/SideBar'
import Navbar from './components/layout/Navbar'
import Login from './components/pages/Login'
import SignUp from './components/pages/SignUp'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <GlobalStyle />
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <div className="container">
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/chat" component={SideBar} />
            </div>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
