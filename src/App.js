import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './style/Global'
import { theme } from './style/theme'

import ChatPage from '@chat/ChatPage'
import Home from '@pages/Home'
import Navbar from '@layout/Navbar'
import Login from '@pages/Login'
import SignUp from '@pages/SignUp'
import Profile from '@profile/Profile'
import Settings from '@pages/Settings'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <div>
          <GlobalStyle />
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/chatpage" component={ChatPage} />
          <div className="container">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/signup" component={SignUp} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/profile/settings" component={Settings} />
            </Switch>
          </div>
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App
