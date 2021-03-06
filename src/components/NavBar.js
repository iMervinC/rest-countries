import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon } from '@fortawesome/free-solid-svg-icons'
import { faMoon as Lfamoon } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = { dark: true }

    this.handleClick = this.handleClick.bind(this)
  }

  handleClick = () => {
    this.setState({ dark: !this.state.dark })
  }

  componentDidMount() {
    if (this.state.dark) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }

  componentDidUpdate() {
    if (this.state.dark) {
      document.body.classList.remove('light')
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
      document.body.classList.add('light')
    }
  }

  render() {
    return (
      <header>
        <nav className="nav">
          <div className="container">
            <div className="nav__container">
              <Link to="/" className="nav__title">
                <h1>Where in the world?</h1>
              </Link>
              {this.state.dark ? (
                <FontAwesomeIcon
                  onClick={this.handleClick}
                  id="moonIcon"
                  icon={faMoon}
                  className="nav__icon"
                />
              ) : (
                <FontAwesomeIcon
                  onClick={this.handleClick}
                  id="moonIcon"
                  icon={Lfamoon}
                  className="nav__icon"
                />
              )}

              <label onClick={this.handleClick} className="nav__label">
                Dark Moon
              </label>
            </div>
          </div>
        </nav>
      </header>
    )
  }
}

export default NavBar
