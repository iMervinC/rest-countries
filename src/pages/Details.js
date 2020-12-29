import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import CountryNotFound from '../components/CountryNotFound'
import RestContext from '../context/rest-context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
  const { name } = useParams()
  const { country, isLoading, error, fetchCountry } = useContext(RestContext)

  useEffect(() => {
    fetchCountry(name)
  }, [])

  return (
    <div className="container">
      {error === null ? (
        <>
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              className="spinner"
              size="6x"
            />
          ) : (
            <>
              <Link to="/">Back</Link>
              <div className="country">
                <img
                  src={country.flag}
                  alt={country.name}
                  className="country__image"
                />
                <div className="country__info">
                  <h2>{country.name}</h2>
                  <div className="country__info__details">
                    <p>
                      <strong>Native Name:</strong> {country.nativeName}
                    </p>
                    <p>
                      <strong>Population:</strong> {country.population}
                    </p>
                    <p>
                      <strong>Region:</strong> {country.region}
                    </p>
                    <p>
                      <strong>Sub Region:</strong> {country.subregion}
                    </p>
                    <p>
                      <strong>Capital:</strong> {country.capital}
                    </p>
                    <p>
                      <strong>Top Level Domain:</strong>{' '}
                      {country.topLevelDomain}
                    </p>
                    <p>
                      <strong>Currencies:</strong>
                    </p>
                    <p>
                      <strong>Languages:</strong>
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <CountryNotFound />
      )}
    </div>
  )
}

export default Details
