import React, { useState } from 'react'
import Button from '../Button/Button'
import FilterButton from './FilterButton'
import Heading from './Heading'
import ListItem from './ListItem'
import './TodoList.css'

function TodoList () {
  const [list, setList] = useState([])
  const [filter, setFilter] = useState('Tutti')
  const [inputVal, setInputVal] = useState('')
  const [contatore, setContatore] = useState([])

  const filteringMap = {
    Tutti: () => true,
    Attivi: item => !item.completed,
    Completati: item => item.completed
  }

  const filterName = Object.keys(filteringMap)

  const updateInputVal = (e) => {
    setInputVal(e.target.value)
  }

  const addItem = () => {
    if (inputVal === '') return
    const id = `item-${contatore}`
    const item = { id, text: inputVal, completed: false }
    setList([...list, item])
    setInputVal('')
    setContatore(contatore+1)
  }

  const markAsDone = (id) => {
    const updatedList = list.map(item => {
      if (id === item.id) {
        return { ...item, completed: !item.completed }
      }
      return item
    })

    setList(updatedList)
  }

  const deleteItem = (id) => {
    const updatedList = list.filter(item => id !== item.id)
    setList(updatedList)
  }

  const editItem = (id, newText) => {
    const updatedList = list.map(item => {
      if (id === item.id) {
        return { ...item, text: newText }
      }
      return item
    })

    setList(updatedList)
  }

  return (
    <>
      <div className="input__wrapper">
        <input
          className="input"
          type="text"
          value={inputVal}
          onInput={updateInputVal}
          onChange={(e) => { if (e.key === 'Enter') addItem() }}
        />
        <Button
          text="Add item"
          onClick={addItem}
        />
      </div>
      <div className="Button-wrapper">
        {filterName.map(filterName => {         //con map si possono aggiungere ulteriori stringhe con funzioni
          return (
            <FilterButton
              key={filterName}
              name={filterName}
              pressed={filterName === filter}
              setFilter={setFilter}
            />
          )
        }
        )}
      </div>
      <Heading
        list={list}
        filter={filter}
        filteringMap={filteringMap}
      />
      <ul className="list">
        {
          list
            .filter(filteringMap[filter])
            .map((item) => {
              return (
                <ListItem
                  item={item}
                  key={item.id}
                  markAsDone={markAsDone}
                  editItem={editItem}
                  deleteItem={deleteItem}
                />
              )
            })
        }
      </ul>
    </>
  )
}

export default TodoList
