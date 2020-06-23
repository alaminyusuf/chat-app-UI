import { useReducer, Children } from 'react'
import CreateContext from './CreatContext'
import ContextReducer from './ContextReducer'

const State = (props) => {
  const { children } = this.props
  const initialState = {
    users: [
      {
        id: 1,
        name: John,
      },
      {
        id: 2,
        name: Kevin,
      },
      {
        id: 3,
        name: Carly,
      },
    ],
  }

  const [state, dispatch] = useReducer(ContextReducer, initialState)

  return (
    <CreateContext.Provider>
      value=
      {{
        users: state.users,
      }}
      {children}
    </CreateContext.Provider>
  )
}
