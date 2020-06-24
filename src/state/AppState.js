import React, { useReducer } from 'react'
import Context from './Context'
import ContextReducer from './ContextReducer'

// import types
import { SET_LOADING } from './TYPES'

const AppState = (props) => {
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
    loading: false,
  }

  const [state, dispatch] = useReducer(ContextReducer, initialState)

  const setLoading = () => {
    dispatch({ type: SET_LOADING })
  }

  return (
    <Context.Provider>
      value=
      {{
        users: state.users,
        setLoading,
      }}
      {props.children}
    </Context.Provider>
  )
}

export default AppState
