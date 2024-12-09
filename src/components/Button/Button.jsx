import React from 'react'
import PropTypes from 'prop-types'
import './Button.css'

function Button ({ text, type, onClick }) {
  return (
    <div className="buttonWrapper">
      <button
        className={`button ${type || 'default'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  )
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Button