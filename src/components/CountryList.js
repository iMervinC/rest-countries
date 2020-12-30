import React from 'react'
import Card from '../components/Card'
import CountryNotFound from '../components/CountryNotFound'
import Spinner from './Spinner'

const CountryList = ({ data, loading, error }) => {
  return (
    <>
      {error !== null ? (
        <CountryNotFound />
      ) : (
        <>
          {loading ? (
            <Spinner />
          ) : (
            <div className="container container-card">
              {data.map((country) => (
                <Card
                  key={country.name}
                  name={country.name}
                  img={country.flag}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))}
            </div>
          )}
        </>
      )}
    </>
  )
}

export default CountryList
