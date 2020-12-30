import React, { useState, useContext } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'
import RestContext from '../context/rest-context'

const Inputs = () => {
  const [search, setSearch] = useState('')
  const { fetchByRegion, fetchBySearch, fetchAll } = useContext(RestContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    fetchBySearch(search)
  }

  return (
    <div className="container container-flex">
      <div className="search">
        <FontAwesomeIcon icon={faSearch} className="search__icon" />
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Search for a country..."
            name="search"
            id="search"
            className="search__box"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
              fetchBySearch(e.target.value)
            }}
          />
        </form>
      </div>
      <div className="dropdown">
        <div className="dropdown-select">
          <span className="dropdown-select__label">Filter by Region</span>
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
        <div className="dropdown-list">
          <div className="dropdown-list__item" onClick={() => fetchAll()}>
            All
          </div>
          {['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'].map(
            (x, index) => (
              <div
                key={index}
                className="dropdown-list__item"
                onClick={() => fetchByRegion(x)}
              >
                {x}
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default Inputs
