import React from 'react'
import { thousands_separators } from '../helpers/helpers'

const Card = ({ name, img, population, region, capital }) => {
  return (
    <div className="card">
      <img className="card__img" src={img} alt={name} />
      <h3 className="card__title">{name}</h3>
      <p>
        <strong>Population:</strong> {thousands_separators(population)}
      </p>
      <p>
        <strong>Region:</strong> {region}
      </p>
      <p>
        <strong>Capital:</strong> {capital}
      </p>
    </div>
  )
}

export default Card
