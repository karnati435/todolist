import React, { useState, useEffect } from "react";
import "./App.css";

import TodoInput from "./components/Todo/TodoInput";
import TodoList from "./components/Todo/TodoList";

function App() {
  const [todo, setTodo] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  // Function to persist the todo list to localStorage
  function persist(newTodoList) {
    localStorage.setItem("todo", JSON.stringify({ todo: newTodoList }));
  }

  // Add new todo
  function handleAddTodo(newTodo) {
    if (newTodo.trim()) {
      // Prevent adding empty or whitespace-only todos
      const updatedTodos = [...todo, newTodo];
      setTodo(updatedTodos);
      persist(updatedTodos);
      setTodoValue(""); // Clear input after adding
    }
  }

  // Delete todo by index
  function handleDeleteTodo(index) {
    const updatedTodos = todo.filter((_, todoIndex) => todoIndex !== index);
    setTodo(updatedTodos);
    persist(updatedTodos);
  }

  // Edit todo by index
  function handleEditTodo(index) {
    const editedValue = todo[index];
    setTodoValue(editedValue); // Set the current value for editing
    handleDeleteTodo(index); // Delete the todo after it has been selected for editing
  }

  // Load todo list from localStorage on page load
  useEffect(() => {
    const savedTodos = localStorage.getItem("todo");
    if (savedTodos) {
      const parsedTodos = JSON.parse(savedTodos).todo;
      setTodo(parsedTodos || []); // Set todos if they exist, or empty array if not
    }
  }, []);

  return (
    <div className="App">
      <>
        <TodoInput
          handleAddTodo={handleAddTodo}
          todoValue={todoValue}
          setTodoValue={setTodoValue}
        />
        <TodoList
          handleEditTodo={handleEditTodo}
          handleDeleteTodo={handleDeleteTodo}
          todo={todo}
        />
      </>
    </div>
  );
}

export default App;
