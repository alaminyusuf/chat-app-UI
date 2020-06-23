import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const ChatBar = () => {
  // const [users, setusers] = React.useState([
  //   {
  //     id: 1,
  //     name: John,
  //   },
  //   {
  //     id: 2,
  //     name: Kevin,
  //   },
  //   {
  //     id: 3,
  //     name: Carly,
  //   },
  // ])
  return (
    <Body>
      {users.map((user) => (
        <div>
          <NavLink
            to={`/chatpage/chat/${user.id}`}
            activeStyle={{ color: 'blue' }}
          >
            User
          </NavLink>
        </div>
      ))}
      {/* <div> */}
      {/* <div>
        <NavLink to="/chatpage/chat/:id" activeStyle={{ color: 'blue' }}>
          Chat Bar
        </NavLink>
      </div>
      <div>
        <NavLink to="/chatpage/chat/:id" activeStyle={{ color: 'blue' }}>
          Chat Bar
        </NavLink>
      </div>
      <div>
        <NavLink to="/chatpage/chat/:id" activeStyle={{ color: 'blue' }}>
          Chat Bar
        </NavLink>
      </div>
      <div>
        <NavLink to="/chatpage/chat/:id" activeStyle={{ color: 'blue' }}>
          Chat Bar
        </NavLink>
      </div> */}
      {/* </div> */}
    </Body>
  )
}

const Body = styled.div`
  padding: 0;
  height: 100%;
  margin: auto;
  /* display: flex; */
  text-align: center;
  background-color: ${({ theme }) => theme.primary};
  /* align-items: center; */
  width: 60%;
  div {
    /* text-align: center; */
    /* justify-content: center; */
    /* align-items: center; */
    margin: auto;
    width: 95%;
    margin-top: 1px;
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
