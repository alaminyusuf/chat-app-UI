import React from 'react'
import styled from 'styled-components'
import SideBar from './SideBar'

const Home = () => {
  return (
    <Body>
      <SideDiv>
        <SideBar />
      </SideDiv>
      <div style={{ color: '#5f9ea0', fontSize: '25px' }}>Home Page</div>
    </Body>
  )
}

const Body = styled.div`
  height: 92vh;
  display: grid;
  grid-template-columns: 0.5fr 4fr;
  column-gap: 0.5rem;
`

const SideDiv = styled.nav`
  background-color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  border-radius: 5px;
  margin: auto;
  width: 100%;
`

// const Div = styled.h1`
//   font-size: ${({ theme }) => theme.headerFont};
//   font-weight: 500;
// `

export default Home
