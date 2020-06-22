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
  height: 100%;
  margin: 0;
  display: flex;
  justify-content: space-between;
  text-align: center;
  background-color: ${({ theme }) => theme.primaryLight};
  align-items: center;
  width: 100%;
  div {
    text-align: center;
    justify-content: center;
    align-items: center;
    margin: auto;
    /* border-radius: 50%; */
    width: 100%;
    color: #000;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    &:hover {
    }
  }
`

export default ChatBar
