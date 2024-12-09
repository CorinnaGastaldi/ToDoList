import React from 'react'
import PropTypes from 'prop-types'
import ListItem from './ListItem'

function List ({ list }) {
  const listOfItem = list.map((item, index) => {
    return (
      <ListItem text={item.text} key={index} />
    )
  })

  return (
    <ul className="list">
      {listOfItem}
    </ul>
  )
}

List.propTypes = {
  list: PropTypes.array.isRequired
}
export default List