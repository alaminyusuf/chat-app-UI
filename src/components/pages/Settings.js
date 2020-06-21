import React from 'react'
import styled from 'styled-components'
import { Edit, ExitToApp, Person } from '@material-ui/icons'

const Settings = () => {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <Body>
      <H3>
        Edit Profile <Person fontSize="large" />
      </H3>
      <Div>
        <div>
          Name <Edit fontSize="small" />
        </div>
        <div>
          Age <Edit fontSize="small" />
        </div>
        <div>
          Country <Edit fontSize="small" />
        </div>
        <div>
          Phone <Edit fontSize="small" />
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <label>
              Upload file:
              <Input type="file" />
            </label>
          </form>
          <Edit fontSize="small" />
        </div>
        <div>
          Log Out <ExitToApp fontSize="small" />
        </div>
        <Button type="submit">Save</Button>
      </Div>
    </Body>
  )
}

const Body = styled.div`
  height: 93.7vh;
  display: flex;
  flex-direction: column;
`
const Div = styled.div`
  flex-grow: 4;
  div {
    margin-top: 1.5rem;
    border: 1px #ccc solid;
    padding: 5px;
    display: flex;
    justify-content: space-between;
  }
`
const Left = styled.div`
  flex-grow: 1;
  width: 45%;
`

const H3 = styled.h3`
  text-align: center;
  justify-content: center;
  align-items: center;
  margin-top: 1rem;
  font-size: 25px;
  color: ${({ theme }) => theme.primaryButton};
`

const Button = styled.button`
  width: 40%;
  text-align: center;
  height: 1.8rem;
  color: ${({ theme }) => theme.primaryDark};
  border: none;
  background-color: ${({ theme }) => theme.primaryButton};
  outline: none;
  border-radius: 10px;
  margin-top: 1rem;
  &:hover {
    background-color: ${({ theme }) => theme.secondaryButton};
  }
`

const Input = styled.input`
  /* width: 85%; */
`

export default Settings
