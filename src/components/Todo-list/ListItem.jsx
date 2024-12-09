import React, {useState} from 'react'
import PropTypes from 'prop-types'
import Button from '../Button/Button'
import './TodoList.css'

function ListItem ({ item, markAsDone, deleteItem, editItem }) {
  const [inputVal, setInputVal] = useState(item.text)
  const [isEdit, setIsEdit] = useState(false)

  const updateInputVal = (e) => {
    setInputVal(e.target.value)
  }

  const updateItemValue = () => {
    if(item.completed == "") {
      if (isEdit) {
        editItem(item.id, inputVal)

      }
      setIsEdit(!isEdit)
    }
  }

  return (
    <li className={`list__item${item.completed ? ' done' : ''}`} >
      <div className="list__checkbox">
        <input id={item.id} type="checkbox" defaultChecked={item.completed} onClick={() => markAsDone(item.id)}/>


          <label htmlFor={item.id}>
            {isEdit ? <div className={"input__wrapper"}><input
              className="input"
              type="text"
              value={inputVal}
              onInput={updateInputVal}
              onChange={(e) => {
                if (e.key === 'Enter') updateItemValue()}}
              />

            </div> :
            item.text
            }
        </label>


      </div>
      <div className="list__edit">
        <Button text="Edit" type="outlined" onClick={() => {updateItemValue()}}/>
        <Button text="Delete" type="outlined" onClick={() => deleteItem(item.id)} />
      </div>
    </li>
  )
}

ListItem.propTypes = {
  item: PropTypes.object.isRequired,
  markAsDone: PropTypes.func,
  deleteItem: PropTypes.func,
  editItem: PropTypes.func
}

export default ListItem
