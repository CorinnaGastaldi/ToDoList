import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

function Counter ({ type, text }) {
  let [count, setCount] = useState(0)

  const incrementCounter = () => {
    setCount(count + 1)
  }

  return (
    <>
      <p>
        You clicked {count} times.
      </p>
      <Button
        type={type}
        text={text}
        onClick={incrementCounter}
      />
    </>
  )
}

Counter.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClick: PropTypes.func
}

export default Counter