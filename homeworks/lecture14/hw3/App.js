import "./App.css";
import React, { useState } from "react";

const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const addTodo = () => {
    if (newTodo.trim() !== "") {
      setTodos([...todos, { text: newTodo, completed: false }]);
      setNewTodo("");
    }
  };

  const toggleTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const toggleAllTodos = () => {
    const allCompleted = todos.every((todo) => todo.completed);
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: !allCompleted,
    }));
    setTodos(updatedTodos);
  };

  const clearCompletedTodos = () => {
    const updatedTodos = todos.filter((todo) => !todo.completed);
    setTodos(updatedTodos);
  };

  const countActiveTodos = () => {
    return todos.filter((todo) => !todo.completed).length;
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        className="input"
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="button" onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            <input
              className="input"
              type="checkbox"
              checked={todo.completed}
              onChange={() => toggleTodo(index)}
            />
            <span className={todo.completed ? "completed" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>

      <div>
        <input
          className="input"
          type="checkbox"
          checked={todos.length > 0 && countActiveTodos() === 0}
          onChange={toggleAllTodos}
        />
        <span>Mark all as completed</span>
      </div>

      <div>
        <button className="button" onClick={clearCompletedTodos}>
          Clear Completed
        </button>
      </div>

      <div>
        {countActiveTodos()} {countActiveTodos() === 1 ? "todo" : "todos"} left
      </div>
    </div>
  );
};

export default TodoList;
