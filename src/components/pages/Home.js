import React from 'react'
import styled from 'styled-components'

const Home = () => {
  return (
    <div>
      {/* <img src={img} alt="bg-img" /> */}
      <H1></H1>
    </div>
  )
}

const H1 = styled.h1`
  height: 70vh;
  background-repeat: no-repeat;
  font-size: ${({ theme }) => theme.headerFont};
  font-weight: 500;
`

export default Home
