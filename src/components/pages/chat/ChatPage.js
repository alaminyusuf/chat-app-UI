import React from 'react'
import styled from 'styled-components'
import People from '@material-ui/icons/People'
import ChatBar from './ChatBar'

const ChatPage = () => {
  return (
    <Body>
      <SideDiv>
        <ChatBar />
      </SideDiv>
      <Div>
        <Textarea name="text" cols="10" rows="2"></Textarea>
        <button type="submit">Send</button>
      </Div>
    </Body>
  )
}

const Body = styled.div`
  height: 93.7vh;
  display: flex;
`

const Div = styled.div`
  flex-grow: 5;
  color: ${({ theme }) => theme.primaryButton};
  font-size: ${({ theme }) => theme.headerFont};
  text-align: center;
`

const Textarea = styled.textarea`
  resize: none;
  width: 65%;
  &:focus {
    outline: none;
  }
`

const SideDiv = styled.nav`
  background-color: ${({ theme }) => theme.primaryLight};
  height: 100%;
  margin: auto;
  width: 22%;
`

export default ChatPage
