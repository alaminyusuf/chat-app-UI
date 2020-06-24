import React from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Send } from '@material-ui/icons/'

const Chat = () => {
  console.log(useParams)
  return (
    <div>
      <Link to="/chatpage">Back To Chatpage</Link>
      <Div>
        <h3 style={{ textAlign: 'center' }}>Username</h3>
        <div>
          <div className="container">
            <Textarea name="text" cols="10" rows="2"></Textarea>
            <Button type="submit">
              {' '}
              <Send fontSize="small" />
            </Button>
          </div>
        </div>
      </Div>
    </div>
  )
}

const Div = styled.div`
  /* align-items: center; */
  text-align: center;
  margin: auto;
  height: 100%;
  padding: 0;
  flex-grow: 4;
  color: ${({ theme }) => theme.primaryButton};
  font-size: ${({ theme }) => theme.headerFont};
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

const Textarea = styled.textarea`
  width: 60%;
  resize: none;
  outline: none;
  &:focus {
    /* outline-color: ; */
    border: ${({ theme }) => theme.primaryButton} solid 1.5px;
  }
`

export default Chat
