import React from 'react'
import styled from 'styled-components'

const ProfilePic = () => {
  return (
    <div>
      <H1>Profile Pic</H1>
      <Input type="file" />
      <h2 style={{ textAlign: 'center' }}>Name</h2>
    </div>
  )
}

const H1 = styled.h1`
  font-size: 50px;
  text-align: center;
`

const Input = styled.input`
  width: 85%;
`

export default ProfilePic
