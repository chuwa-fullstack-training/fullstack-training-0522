// TodoApp.js
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, toggleTodo, markAllCompleted, clearCompleted } from './todosSlice';

const TodoApp = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [input, setInput] = useState('');

  const handleAddTodo = () => {
    dispatch(addTodo(input));
    setInput('');
  };

  const handleToggleTodo = (index) => {
    dispatch(toggleTodo(index));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const handleClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const activeTodos = todos.filter((todo) => !todo.completed).length;

  return (
    // Your UI here...
  );
};

export default TodoApp;
