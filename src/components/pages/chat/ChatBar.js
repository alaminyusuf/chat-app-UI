import React from 'react'
import styled from 'styled-components'
import SideBar from '../../layout/SideBar'

const ChatBar = () => {
  return (
    <Body>
      <SideDiv>
        <SideBar />
      </SideDiv>
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
  /* justify-content: center; */
  background-color: ${({ theme }) => theme.primaryButton};
  align-items: center;
  div {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    border-radius: 50%;
    width: 50%;
    /* padding: 5px; */
    color: #f4f4f4;
    margin-top: 3rem;
    &:hover {
    }
  }
`

const SideDiv = styled.nav`
  background-color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  /* margin: auto; */
  width: 15%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 10%;
  }
`

export default ChatBar
