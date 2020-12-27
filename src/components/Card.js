import React from 'react'

const Card = ({ name, img, population, region, capital }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <h3>{name}</h3>
      <p>{population}</p>
      <p>{region}</p>
      <p>{capital}</p>
    </div>
  )
}

export default Card
