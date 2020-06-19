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
        Join Others, Stay Connected! <br /> <People style={{ fontSize: 100 }} />
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

const SideDiv = styled.nav`
  background-color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  margin: auto;
  width: 22%;
`

export default ChatPage
