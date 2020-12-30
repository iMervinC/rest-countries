import { FETCH_ALL, FETCH_REQUEST, FETCH_FAIL, FETCH_ONE } from './rest-actions'

const restReducer = (state, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, isLoading: true }
    ////////////////////////////////////////
    case FETCH_ALL:
      return {
        ...state,
        isLoading: false,
        countries: [...action.payload],
        country: {},
        error: null,
      }
    ///////////////////////////////////////
    case FETCH_ONE:
      return {
        ...state,
        isLoading: false,
        country: { ...action.payload },
        error: null,
      }
    ///////////////////////////////////////
    case FETCH_FAIL:
      return { ...state, isLoading: true, error: { ...action.payload } }
    default:
      return state
  }
}

export default restReducer
