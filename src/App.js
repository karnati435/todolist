import React, { useState } from "react";
import "./App.css";

import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");
 
  function handleAddTodo(newTodo) {
    if (newTodo.trim()) { // Prevent adding empty or whitespace-only todos
      const updatedTodos = [...todo, newTodo];
      setTodo(updatedTodos);
    }
  }

  function handleDeleteTodo(index) {
    const updatedTodos = todo.filter((_, todoIndex) => {
      return todoIndex !== index;
    });
    setTodo(updatedTodos);
  }
  
  function handleeditTodo(index) {
    const EditedValue = todo[index]
    setTodoValue(EditedValue); 
    handleDeleteTodo(index)
  }

  return (
    <div className="App">
      <>
        <TodoInput handleAddTodo={handleAddTodo} todoValue= {todoValue} setTodoValue= {setTodoValue} />
        <TodoList handleeditTodo = {handleeditTodo}   handleDeleteTodo={handleDeleteTodo} todo={todo} />
      </>
    </div>
  );
}

export default App;
