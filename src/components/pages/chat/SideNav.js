import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Settings, Chat, ExitToApp, Person } from '@material-ui/icons'

const SideNav = () => {
  return (
    <Div>
      <NavLink to="/profile" activeStyle={{ color: 'red' }}>
        <div>
          <Person />
        </div>
      </NavLink>
      <NavLink to="/chat" activeStyle={{ color: 'red' }}>
        <div>
          <Chat />
        </div>
      </NavLink>
      <NavLink to="/profile/settings" activeStyle={{ color: 'red' }}>
        <div>
          <Settings />
        </div>
      </NavLink>
      <div>
        <ExitToApp />
      </div>
    </Div>
  )
}

const Div = styled.div`
  /* text-align: center;
  justify-content: center;
  align-items: center; */
  width: 13%;
  height: 100%;
  background-color: ${({ theme }) => theme.primaryDark};
  div {
  color: #fff;
    /* color */
    z-index: 2;
    text-align: center;
    /* justify-content: center;
    align-items: center; */
    margin: auto;
    width: 100%;
    margin-top: 3rem;
  }
`

export default SideNav
