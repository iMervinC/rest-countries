import React from 'react'
import Card from '../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const CountryList = ({ data, loading, error }) => {
  return (
    <>
      {error !== null ? (
        <h1>Countries not found</h1>
      ) : (
        <>
          {' '}
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
