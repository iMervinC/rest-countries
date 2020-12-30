import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from 'react-router-dom'

const GoBack = () => {
  let history = useHistory()

  return (
    <div onClick={() => history.goBack()} className="back">
      <FontAwesomeIcon icon={faArrowLeft} />
      Back
    </div>
  )
}

export default GoBack
