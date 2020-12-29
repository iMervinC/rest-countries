import { useReducer } from 'react'
import RestContext from './rest-context'
import restReducer from './restReducer'
import { FETCH_ALL, FETCH_REQUEST, FETCH_FAIL } from './rest-actions'
import axios from 'axios'

const RestState = ({ children }) => {
  const initialState = {
    countries: [],
    error: null,
    isLoading: true,
  }

  const [state, dispatch] = useReducer(restReducer, initialState)

  async function fetchAll() {
    try {
      dispatch({ type: FETCH_REQUEST })
      const { data } = await axios.get(
        'https://restcountries.eu/rest/v2/all?fields=name;capital;population;flag;region'
      )
      dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_FAIL, payload: error })
    }
  }

  async function fetchByRegion(region) {
    try {
      dispatch({ type: FETCH_REQUEST })
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}?fields=name;capital;population;flag;region`
      )
      dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_FAIL, payload: error })
    }
  }

  async function fetchBySearch(search) {
    try {
      dispatch({ type: FETCH_REQUEST })
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${search}`
      )
      dispatch({ type: FETCH_ALL, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_FAIL, payload: error })
    }
  }

  return (
    <RestContext.Provider
      value={{
        countries: state.countries,
        isLoading: state.isLoading,
        error: state.error,
        fetchAll,
        fetchByRegion,
        fetchBySearch,
      }}
    >
      {children}
    </RestContext.Provider>
  )
}

export default RestState
