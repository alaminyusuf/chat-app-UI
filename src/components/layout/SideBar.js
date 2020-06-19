import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Settings, Chat, ExitToApp, Portrait } from '@material-ui/icons'

const SideBar = () => {
  return (
    <Div>
      <Link to="/profile">
        <div>
          <Portrait fontSize="small" />
        </div>
      </Link>
      <Link to="/chat">
        <div>
          <Chat fontSize="small" />
        </div>
      </Link>
      <Link to="/profile/settings">
        <div>
          <Settings fontSize="small" />
        </div>
      </Link>
      <div>
        <ExitToApp fontSize="small" />
      </div>
    </Div>
  )
}

const Div = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 5px;
    width: 50%;
    padding: 5px;
    background-color: ${({ theme }) => theme.secondaryButton};
    margin-top: 3rem;
    &:hover {
      background-color: ${({ theme }) => theme.primaryButton};
    }
  }
`

export default SideBar
