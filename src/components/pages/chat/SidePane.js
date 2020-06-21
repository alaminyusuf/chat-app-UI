import React from 'react'
import styled from 'styled-components'
import SideBar from '@layout/SideBar'

const ChatBar = () => {
  return (
    <Body>
      <div>
        <div>Chat Bar</div>
        <div>Chat Bar</div>
        <div>Chat Bar</div>
        <div>Chat Bar</div>
      </div>
    </Body>
  )
}

const Body = styled.div`
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryLight};
  align-items: center;
  div {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 50%;
    width: 50%;
    color: #f4f4f4;
    margin-top: 3rem;
    &:hover {
    }
  }
`

const SideDiv = styled.nav`
  text-align: center !important;
  justify-content: center !important;
  align-items: center !important;
  background-color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  margin: 0;
  width: 15%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 10%;
  }
`

export default ChatBar
