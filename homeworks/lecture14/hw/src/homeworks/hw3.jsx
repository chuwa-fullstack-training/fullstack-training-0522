import React, { useState } from 'react';

import "./hw3.css";

function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim() !== "") {
      setTodos([
        ...todos, 
        { id: todos.length, title: input, completed: false }
      ]);
      setInput("");
    }
  }

  const toggleTodo = (id) => {
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const markAllCompleted = () => {
    const updatedTodos = todos.map((todo) => ({ ...todo, completed: true }))
    setTodos(updatedTodos)
  }

  const clearCompleted = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  }  

  const activeTodosCounts = todos.filter((todo) => !todo.completed).length

  return (
    <>
      <h1>Todo List</h1>

      <div>
        <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </div>

      <div>
        <p>{activeTodosCounts} remaining</p>
        <button onClick={clearCompleted}>Clear Completed Todos</button>
      </div>
      <div>
        <button onClick={markAllCompleted}>Mark All Done</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id} style={{ textDecoration: todo.completed ? "line-through" : "none" }} onClick={() => toggleTodo(todo.id)}>{todo.title}</li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default TodoList;