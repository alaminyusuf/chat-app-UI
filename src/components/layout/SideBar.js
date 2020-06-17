import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const SideBar = () => {
  return (
    <Div>
      <Link to="/profile">
        <div>Profile</div>
      </Link>
      <Link to="/chat">
        <div>Chat</div>
      </Link>
      <Link to="/profile/settings">
        <div>Settings</div>
      </Link>
      <div>Log Out</div>
    </Div>
  )
}

const Div = styled.div`
  text-align: center;
  justify-content: center;
  align-items: center;
  div {
    margin: auto;
    border-radius: 10px;
    width: 85%;
    padding: 5px;
    background-color: ${({ theme }) => theme.secondaryButton};
    margin-top: 3rem;
    &:hover {
      background-color: ${({ theme }) => theme.primaryButton};
    }
  }
`

export default SideBar
