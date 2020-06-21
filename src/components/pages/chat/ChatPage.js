import React from 'react'
import styled from 'styled-components'
import { People, Send } from '@material-ui/icons/'
import ChatBar from './ChatBar'

const ChatPage = () => {
  return (
    <Body>
      <SideDiv>
        <ChatBar />
      </SideDiv>
      <Div>
        <h3 style={{ textAlign: 'center' }}>Username</h3>
        <div>
          <Textarea name="text" cols="10" rows="2"></Textarea>
          <Button type="submit">
            {' '}
            <Send fontSize="small" />
          </Button>
        </div>
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
  div {
    text-align: center;
    justify-content: center;
    align-items: center;
    padding: 5px;
  }
`

const Textarea = styled.textarea`
  border-radius: 2px;
  resize: none;
  width: 70%;
  border: 1px solid #ccc;
  outline: none;
  height: 2rem;
  &:focus {
    border: 2px solid ${({ theme }) => theme.primaryButton};
    outline: #00ffff;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 55%;
  }
`

const SideDiv = styled.nav`
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  margin: auto;
  width: 30%;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 12%;
  }
`

const Button = styled.button`
  width: 5rem;
  text-align: center;
  height: 1.8rem;
  color: #fff;
  border: none;
  background-color: ${({ theme }) => theme.primaryButton};
  outline: none;
  border-radius: 5px;
  margin-bottom: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryButton};
  }
`

export default ChatPage
