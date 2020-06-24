import { SET_LOADING } from './TYPES'

export default (state, action) => {
  switch (action) {
    case SET_LOADING:
      return {
        setLoading: true,
      }

    default:
      return state
  }
}
