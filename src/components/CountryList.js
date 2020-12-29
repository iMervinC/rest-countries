import React from 'react'
import Card from '../components/Card'
import CountryNotFound from '../components/CountryNotFound'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const CountryList = ({ data, loading, error }) => {
  return (
    <>
      {error !== null ? (
        <CountryNotFound />
      ) : (
        <>
          {loading ? (
            <div className="container container-spinner">
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                className="spinner"
                size="6x"
              />
            </div>
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
