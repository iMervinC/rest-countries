import { useContext, useEffect } from 'react'
import Inputs from '../components/Inputs'
import CountryList from '../components/CountryList'
import RestContext from '../context/rest-context'

const HomePage = () => {
  const { countries, fetchAll, isLoading, error } = useContext(RestContext)

  useEffect(() => {
    fetchAll()
  }, [])

  return (
    <>
      <Inputs />
      <CountryList data={countries} loading={isLoading} error={error} />
    </>
  )
}

export default HomePage
