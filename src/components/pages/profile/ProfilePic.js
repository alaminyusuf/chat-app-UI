import React from 'react'
import styled from 'styled-components'

const ProfilePic = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <H1>Profile Pic</H1>
      <form onSubmit={handleSubmit}>
        <label>
          Upload file:
          <Input type="file" />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2 style={{ textAlign: 'center' }}>Name</h2>
    </div>
  )
}

const H1 = styled.h1`
  font-size: 50px;
  text-align: center;
`

const Input = styled.input`
  /* width: 85%; */
`

export default ProfilePic
