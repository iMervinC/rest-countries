import React from 'react'
import windrunner from '../_img/w.svg'

const CountryNotFound = () => {
  return (
    <div className="notFound">
      <h2>Country Not Found</h2>
      <img src={windrunner} alt="windrunner" className="notFound__img" />
    </div>
  )
}

export default CountryNotFound
