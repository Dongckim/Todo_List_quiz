import React, { createContext, useState } from 'react'
import './App.css'

function App() {
  const [todo, setTodo] = useState([
    {id : 1, content : '리액트를 배워봅시다'},
    {id : 2, content : 'useState를 배워봅시다'},
    {id : 3, content : '자바스크립트를 배워봅시다'},
  ])
  const [content, setContent] = useState('')

  const addButtonHandler = () => {
    const newTodo = {
      id : Math.random(),
      content,
    }
    setTodo([...todo,newTodo])
  }
  console.log(todo)

  return (
    <>
      <div className = 'insertion'>
      <input className='input' type = 'text' value = {content} onChange = {(event) => setContent(event.target.value)}/>
      <button className='button' onClick = {addButtonHandler}>추가하기</button>
      <br/>
      </div>
      <h1 className='Font'>Todo List</h1>
      <div className='list-global'>
        {
        todo.map((item) => {
          return (<div className='todo-component' key={item.id}>
            {item.content}
          </div>)})
        }
      </div>
      
    </>
  
  )
}

export default App