import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Details = () => {
  const { name } = useParams()
  console.log(name)
  return (
    <div>
      <h1>Details {name}</h1>
      <Link to="/">Home </Link>
    </div>
  )
}

export default Details
