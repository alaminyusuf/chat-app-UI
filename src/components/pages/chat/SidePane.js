import React from 'react'
import styled from 'styled-components'

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
  padding: 0;
  height: 100%;
  margin: auto;
  /* display: flex; */
  text-align: center;
  background-color: ${({ theme }) => theme.primaryLight};
  /* align-items: center; */
  width: 60%;
  div {
    /* text-align: center; */
    /* justify-content: center; */
    /* align-items: center; */
    margin: auto;
    width: 100%;
    color: #000;
    height: 3rem;
    /* margin-top: 1.5rem;
    margin-bottom: 1.5rem; */
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%;
  }
`

export default ChatBar
