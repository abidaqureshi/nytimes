import React from 'react'
import PropTypes from 'prop-types'

const Alert = (props) => {
  const { message } = props
  return (
    <div className="alert alert-danger" role="alert">
      {message}
    </div>
  )
}
export default Alert

Alert.propTypes = {
  message: PropTypes.string.isRequired,
}
