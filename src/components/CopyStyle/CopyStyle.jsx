import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'

import { defaultStyle, outlinedStyle } from './ButtonDefaultStyle'

function CopyStyle ({ text, type }) {
  let [currentText, setText] = useState(text)

  const changeText = () => {
    const oldText = currentText
    const style = type === 'outlined' ? outlinedStyle : defaultStyle
    navigator.clipboard.writeText(style)
    setText('Copied!')

    setTimeout(() => {
      setText(oldText)
    }, 1000)
  }

  return (
    <div className="buttonWrapper">
      <Button
        type={type}
        text={currentText}
        onClick={changeText}
      />
    </div>
  )
}

CopyStyle.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.string
}

export default CopyStyle