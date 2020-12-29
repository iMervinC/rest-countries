import React from 'react'
import { thousands_separators } from '../helpers/helpers'
import { Link } from 'react-router-dom'

const Card = ({ name, img, population, region, capital }) => {
  return (
    <Link className="card" to={`/country/${name}`}>
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
    </Link>
  )
}

export default Card
