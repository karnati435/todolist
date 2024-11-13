import React from 'react'
import TodoCard from './TodoCard'

export default function TodoList({todo, handleDeleteTodo, handleeditTodo, todoValue, setTodoValu}) {
   
  return (
    
  <ul className='main'>
      {todo.map((todoitem, todoIndex) =>{
        return(
        <TodoCard handleDeleteTodo={handleDeleteTodo} handleeditTodo={handleeditTodo} key={todoIndex} index = {todoIndex}>
            <p>{todoitem}</p>
        </TodoCard>
        )
      })}
      </ul>
  
  )
}
