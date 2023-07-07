import './App.css';
import React, { useState, useEffect } from 'react';

export default function Hw3() {
  const [todos, setTodos] = useState([
    { name: 'todo1', done: false },
    { name: 'todo2', done: false },
    { name: 'todo3', done: false },
  ]);
  const [inputText, setInputText] = useState('');
  const [count, setCount] = useState(todos.length);

  // Input text handlings
  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };
  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setTodos([
        ...todos,
        {
          name: e.target.value,
          done: false,
        },
      ]);
      setInputText('');
    }
  };

  // "Clear Completed TODOs" handling
  const handleClearBtnClick = () => {
    setTodos(todos.filter((todo) => !todo.done));
  };

  // "Mark All Done" handling
  const handleMADClick = (e) => {
    const newTodos = todos.map((todo) => {
      todo.done = e.target.checked;
      return todo;
    });
    setTodos(newTodos);
  };

  const handleTodoDone = (todo) => (e) => {
    const idxToUpdate = todos.indexOf(todo);
    const newTodos = [...todos];
    newTodos[idxToUpdate].done = e.target.checked;
    setTodos(newTodos);
  };

  useEffect(() => {
    const doneTodos = todos.filter((todo) => todo.done);
    setCount(todos.length - doneTodos.length);
  }, [todos]);

  // Render
  return (
    <div className='Hw3'>
      <h1>TODOs - ReactJs</h1>

      <input
        id='TodoDetail'
        type='text'
        value={inputText}
        placeholder="Type a TODO's name and hit Enter"
        onChange={handleInputChange}
        onKeyDown={handleEnter}
      />

      <div className='Container1'>
        <p id='activeTodoCount'>{`${count} remaining`}</p>
        <button onClick={handleClearBtnClick}> Clear Completed TODOs </button>
      </div>

      <div className='Container2'>
        <input id='MAD' type='checkbox' onChange={handleMADClick} />
        <label id='MAD' htmlFor='MAD'>
          Mark All Done
        </label>

        {todos.map((todo) => (
          <div key={todo.name} className='Todo'>
            <input
              id={todo.name}
              type='checkbox'
              checked={todo.done}
              onChange={handleTodoDone(todo)}
            />
            <label htmlFor={todo.name}>{todo.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
}
