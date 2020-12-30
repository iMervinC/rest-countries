import React from 'react'
import { Link } from 'react-router-dom'

const CountryDetails = ({
  flag,
  name,
  nativeName,
  population,
  region,
  subregion,
  capital,
  topLevelDomain,
  currencyList,
  langsName,
  borders,
}) => {
  return (
    <div className="country">
      <div className="country__image">
        <img src={flag} alt={name} className="country__image__content" />
      </div>
      <div className="country__info">
        <h2 className="country__info__title">{name}</h2>
        <div className="country__info__details">
          <div className="col1">
            <p>
              <strong>Native Name:</strong> {nativeName}
            </p>
            <p>
              <strong>Population:</strong> {population}
            </p>
            <p>
              <strong>Region:</strong> {region}
            </p>
            <p>
              <strong>Sub Region:</strong> {subregion}
            </p>
            <p>
              <strong>Capital:</strong> {capital}
            </p>
          </div>
          <div className="col2">
            <p>
              <strong>Top Level Domain: </strong>
              {topLevelDomain}
            </p>
            <p>
              <strong>Currencies: </strong>
              {currencyList.toString()}
            </p>
            <p>
              <strong>Languages: </strong>
              {langsName.toString()}
            </p>
          </div>
        </div>
        <div className="country__info__borders">
          <div className="country__info__borders__title">
            <strong> Border Countries: </strong>
          </div>
          {borders.length !== 0 ? (
            <>
              {borders.map((x, index) => (
                <Link
                  key={index}
                  to={`/country/${x}`}
                  className="country__info__borders__items"
                >
                  {x}
                </Link>
              ))}
            </>
          ) : (
            <div className="country__info__borders__items">No Borders</div>
          )}
        </div>
      </div>
    </div>
  )
}

export default CountryDetails
