import React from 'react'
import Button from '../Button/Button'
import PropTypes from 'prop-types'

function FilterButton (props) {
  return (
    <Button
      type={props.pressed ? 'default' : 'outlined'}
      text={props.name}
      onClick={() => props.setFilter(props.name)}
    />
  )
}

FilterButton.propTypes = {
  pressed: PropTypes.bool,
  setFilter: PropTypes.func,
  name: PropTypes.string
}

export default FilterButton