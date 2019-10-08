import React, { useState, useEffect } from 'react'
import Item from './Item'
export default function App() {
  const [value, setValue] = useState('')
  const [todo, setTodo] = useState([])
  useEffect(() => {
    const raw = localStorage.getItem('todo') || []
    setTodo(JSON.parse(raw))
  }, [])

  useEffect(() => {
    localStorage.setItem('todo', JSON.stringify(todo))
  }, [todo])

  const onHandleChange = (e) => {
    e.preventDefault()
    console.log(value)
    const newArr = [...todo, { text: value, done: false, id: value }]
    setTodo(newArr)
    setValue('')
    console.log(todo)
  }
  const onDelete = (index) => {
    const newArr = [...todo]
    newArr.splice(index, 1)
    setTodo(newArr)
  }

  return (
    <div className="wrapper">
      <form onSubmit={onHandleChange}>
        <input
          className="list"
          placeholder="введите текст"
          type='text'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      </form>
      {todo.map((item, index) => {
        return (
          <Item
            key={index}
            text={item.text}
            onDelete={() => onDelete(index)}
          />
        )
      })}
    </div>
  )
}

