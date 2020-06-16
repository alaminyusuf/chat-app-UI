import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/Global'
import { theme } from './style/theme'

import Home from './components/pages/Home'
import SideBar from './components/pages/SideBar'
import Navbar from './components/layout/Navbar'
import Login from './components/layout/Login'
import SignUp from './components/layout/SignUp'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <GlobalStyle />
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route path="/chat" component={SideBar} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
