import React, { useState } from "react";
import "./Todo.css";

function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div
      className="todo"
      style={{ textDecoration: todo.isCompleted ? "line-through" : "" }}
    >
      {todo.text}

      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        size="53"
        
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
      />
      <p>
        Press Enter to upload
      </p>
        
    </form>
  );
}

function Todofinal() {
  const [todos, setTodos] = useState([
    // {
    //   text: "Learn about React",
    //   isCompleted: false
    // },
    // {
    //   text: "Meet friend for lunch",
    //   isCompleted: false
    // },
    // {
    //   text: "Build really cool todo app",
    //   isCompleted: false
    // }
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>

  );
}

export default Todofinal;
