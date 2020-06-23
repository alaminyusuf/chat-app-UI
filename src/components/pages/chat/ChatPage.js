import React from 'react'
import styled from 'styled-components'
import { Send } from '@material-ui/icons/'
import ChatBar from './SidePane'
import SideNav from './SideNav'

const ChatPage = () => {
  return (
    <Body>
      <SideDiv>
        <SideNav />
      </SideDiv>
      <Div>
        <ChatBar />
      </Div>
    </Body>
  )
}

// <Body>
//   <SideDiv>
//     <SideNav />
//     <ChatBar />
//   </SideDiv>
//   <Div>
//     <h3 style={{ textAlign: 'center' }}>Username</h3>
//     <div>
//       <Textarea name="text" cols="10" rows="2"></Textarea>
//       <Button type="submit">
//         {' '}
//         <Send fontSize="small" />
//       </Button>
//     </div>
//   </Div>
// </Body>

const Body = styled.div`
  height: 93.7vh;
  display: flex;
`
const Div = styled.div`
  /* align-items: center; */
  text-align: center;
  margin: auto;
  height: 100%;
  padding: 0;
  flex-grow: 4;
  color: ${({ theme }) => theme.primaryButton};
  font-size: ${({ theme }) => theme.headerFont};
  /* text-align: center; */
  div {
    /* height: 100%; */
    /* text-align: center; */
    /* justify-content: center;
    align-items: center; */
    /* padding: 5px; */
  }
`

const SideDiv = styled.nav`
  align-items: center;
  height: 100%;
  margin: auto;
  width: 5%;
  background-color: ${({ theme }) => theme.primaryDark};
  color: #f4f4f4;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 20%;
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
