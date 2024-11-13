import React from "react";

function TodoInput({ handleAddTodo,todoValue, setTodoValue }) {
 
  return (
    <div>
      <header>
        <input
          value={todoValue}
          onChange={(e) => {
            setTodoValue(e.target.value);
          }}
          placeholder="Type Here.."
        />
        <button
          onClick={() => {
            handleAddTodo(todoValue);
            setTodoValue("")
          }}
        
        >
          ADD
        </button>
      </header>
    </div>
  );
}

export default TodoInput;
