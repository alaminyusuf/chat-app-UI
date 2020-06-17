import React from 'react'
import styled from 'styled-components'

const SideBar = () => {
  return (
    <Div>
      <div>Profile</div>
      <div>Chat</div>
      <div>Settings</div>
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
    width: 80%;
    padding: 5px;
    background-color: ${({ theme }) => theme.secondaryButton};
    margin-top: 3rem;
    &:hover {
      background-color: ${({ theme }) => theme.primaryButton};
    }
  }
`

export default SideBar
