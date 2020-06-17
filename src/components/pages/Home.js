import React from 'react'
import styled from 'styled-components'
import SideBar from '../layout/SideBar'

const Home = () => {
  return (
    <Body>
      <SideDiv>
        <SideBar />
      </SideDiv>
      <Div>Join Others, Stay Connected!</Div>
    </Body>
  )
}

const Body = styled.div`
  height: 93.7vh;
  display: flex;
`

const Div = styled.div`
  flex-grow: 4;
  color: ${({ theme }) => theme.primaryButton};
  font-size: ${({ theme }) => theme.headerFont};
  text-align: center;
`

const SideDiv = styled.nav`
  background-color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  margin: auto;
  width: 15%;
`

export default Home
