import { useReducer } from 'react'
import RestContext from './rest-context'
import restReducer from './restReducer'
import { FETCH_ALL, FETCH_REQUEST, FETCH_FAIL, FETCH_ONE } from './rest-actions'
import axios from 'axios'

const RestState = ({ children }) => {
  const initialState = {
    countries: [],
    country: {},
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

  async function fetchCountry(country) {
    try {
      dispatch({ type: FETCH_REQUEST })
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/name/${country}`
      )
      dispatch({ type: FETCH_ONE, payload: data[0] })
    } catch (error) {
      dispatch({ type: FETCH_FAIL, payload: error })
    }
  }

  async function fetchByCode(code) {
    try {
      dispatch({ type: FETCH_REQUEST })
      const { data } = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      )
      dispatch({ type: FETCH_ONE, payload: data })
    } catch (error) {
      dispatch({ type: FETCH_FAIL, payload: error })
    }
  }

  return (
    <RestContext.Provider
      value={{
        countries: state.countries,
        country: state.country,
        isLoading: state.isLoading,
        error: state.error,
        fetchAll,
        fetchByRegion,
        fetchBySearch,
        fetchCountry,
        fetchByCode,
      }}
    >
      {children}
    </RestContext.Provider>
  )
}

export default RestState
