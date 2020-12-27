import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleDown } from '@fortawesome/free-solid-svg-icons'

class Inputs extends Component {
  constructor(props) {
    super(props)

    this.state = { search: '' }

    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.search)
    this.setState({ search: '' })
  }

  render() {
    return (
      <div className="container container-flex">
        <div className="search">
          <FontAwesomeIcon icon={faSearch} className="search__icon" />
          <form onSubmit={(e) => this.handleSubmit(e)}>
            <input
              type="text"
              placeholder="Search for a country..."
              name="search"
              id="search"
              className="search__box"
              value={this.state.search}
              onChange={(e) => this.setState({ search: e.target.value })}
            />
          </form>
        </div>
        <div className="dropdown">
          <div className="dropdown-select">
            <span className="dropdown-select__label">Selected items</span>
            <FontAwesomeIcon icon={faAngleDown} />
          </div>
          <div className="dropdown-list">
            {['Africa', 'America', 'Asia', 'Europe', 'Ocenia'].map(
              (x, index) => (
                <div key={index} className="dropdown-list__item">
                  {x}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default Inputs
