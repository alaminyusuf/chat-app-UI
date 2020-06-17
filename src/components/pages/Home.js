import React from 'react'
import styled from 'styled-components'
import SideBar from '../layout/SideBar'

const Home = () => {
  return (
    <Body>
      <SideDiv>
        <SideBar />
      </SideDiv>
      <Div style={{ color: '#5f9ea0', fontSize: '25px' }}>
        <div className="wrapper">
          <Img
            src="https://images.pexels.com/photos/4132424/pexels-photo-4132424.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
            alt="bg-img"
          />
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
  flex-grow: 4;
`

const Img = styled.img`
  height: 93.7vh;
  width: 100%;
`

const SideDiv = styled.nav`
  background-color: ${({ theme }) => theme.primaryDark};
  height: 100%;
  margin: auto;
  width: 15%;
`

export default Home
