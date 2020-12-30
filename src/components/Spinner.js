import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

const Spinner = () => {
  return (
    <div className="container-spinner">
      <FontAwesomeIcon icon={faSpinner} spin className="spinner" size="6x" />
    </div>
  )
}

export default Spinner
