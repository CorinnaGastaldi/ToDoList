import React from 'react'
import PropTypes from 'prop-types'

function Heading (props) {
  //const [heading, setHeading] = useState('')
  const active = props.list.filter(props.filteringMap['Attivi']).length
  const completed = props.list.filter(props.filteringMap['Completati']).length

  if (props.filter === 'Tutti' || props.filter === 'Attivi') {
    if (active > 1) {
      return (
        <h3>{`Ci sono ${active} attività da completare`}</h3>
      )
    } else if (active === 1) {
      return (
        <h3>{`Resta solo un'ultima attività!`}</h3>
      )
    } else if (completed > 0) {
      return (
        <h3>{`Tutte le attività sono state completate!`}</h3>
      )
    } else {
      return (
        <h3>{`Non c'è niente da vedere qui...`}</h3>
      )
    }
  } else {
    if (completed > 0 && completed === props.list.length) {
      return (
        <h3>{`Tutte le attività sono state completate!`}</h3>
      )
    } else if (completed > 1) {
      return (
        <h3>{`${completed} attività sono state completate`}</h3>
      )
    } else if (completed === 1) {
      return (
        <h3>{`${completed} attività è stata completata`}</h3>
      )
    } else {
      return (
        <h3>{`Non c'è niente da vedere qui...`}</h3>
      )
    }
  }
}

Heading.propTypes = {
  list: PropTypes.array,
  filter: PropTypes.string,
  filteringMap: PropTypes.object
}

export default Heading
