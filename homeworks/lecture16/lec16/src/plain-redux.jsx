import React, { useState } from "react";
import { createStore } from 'redux';
import { useSelector, useDispatch, Provider } from 'react-redux';
import "./App.css";

// Actions
const addTodo = (todo) => ({ type: 'ADD_TODO', payload: todo });
const toggleTodo = (id) => ({ type: 'TOGGLE_TODO', payload: id });
const markAllCompleted = () => ({ type: 'MARK_ALL_COMPLETED' });
const clearCompleted = () => ({ type: 'CLEAR_COMPLETED' });

// Reducer
const reducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, { ...action.payload, completed: false }];
    case 'TOGGLE_TODO':
      return state.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo);
    case 'MARK_ALL_COMPLETED':
      return state.map((todo) => ({ ...todo, completed: true }));
    case 'CLEAR_COMPLETED':
      return state.filter((todo) => !todo.completed);
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

function TodoList() {
  const [input, setInput] = useState("");
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddTodo = () => {
    if (input.trim() !== "") {
      dispatch(addTodo({ id: todos.length, title: input }));
      setInput("");
    }
  };

  const onToggleTodo = (id) => {
    dispatch(toggleTodo(id));
  };

  const onMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  const onClearCompleted = () => {
    dispatch(clearCompleted());
  };

  const activeTodosCounts = todos.filter((todo) => !todo.completed).length;

  return (
    <>
      <h1>Todo List</h1>

      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={onAddTodo}>Add Todo</button>
      </div>

      <div>
        <p>{activeTodosCounts} remaining</p>
        <button onClick={onClearCompleted}>Clear Completed Todos</button>
      </div>
      <div>
        <button onClick={onMarkAllCompleted}>Mark All Done</button>
      </div>
      <div>
        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              style={{
                textDecoration: todo.completed ? "line-through" : "none"
              }}
              onClick={() => onToggleTodo(todo.id)}
            >
              {todo.title}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <TodoList />
    </Provider>
  );
}
