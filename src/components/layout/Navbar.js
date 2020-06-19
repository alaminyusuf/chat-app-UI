import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const Navbar = () => {
  const location = useLocation()
  const isHome = () => (location.pathname === '/' ? true : false)

  return (
    <Nav>
      <Link to="/">
        <H1>Chat Hub</H1>
      </Link>
      <Ul>
        <Link to="/login">
          <Li>Login</Li>
        </Link>
        <Link to="/signup">
          <Li>Sign Up</Li>
        </Link>
      </Ul>
    </Nav>
  )
}

const H1 = styled.h1`
  font-size: 25px;
`

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 0.4rem;
  height: 5vh;
  background-color: ${({ theme }) => theme.primaryLight};
  color: ${({ theme }) => theme.primaryDark};
`

const Ul = styled.ul`
  display: flex;
  justify-content: space-evenly;
`

const Li = styled.li`
  text-align: center;
  justify-content: center;
  align-items: center;
  width: 4rem;
  list-style: none;
  margin: 0 15px 0 0;
  padding: 5px 3px 10px 5px;
  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0.1rem 0.2rem 0.3rem;
  box-shadow: rgba(0, 0, 0, 0.3) 1px 1px 2px 1px;
  color: ${({ theme }) => theme.primaryDark};
`

export default Navbar
