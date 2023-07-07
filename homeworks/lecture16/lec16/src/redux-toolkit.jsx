import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch, Provider } from 'react-redux';
import "./App.css";

// Slice
const todosSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: state.length, title: action.payload, completed: false });
    },
    toggleTodo: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    markAllCompleted: (state) => {
      return state.map(todo => ({ ...todo, completed: true }));
    },
    clearCompleted: (state) => {
      return state.filter(todo => !todo.completed);
    },
  },
});

export const { addTodo, toggleTodo, markAllCompleted, clearCompleted } = todosSlice.actions;

// Store
const store = configureStore({
  reducer: todosSlice.reducer,
});

function TodoList() {
  const [input, setInput] = useState('');
  const todos = useSelector(state => state);
  const dispatch = useDispatch();

  const onAddTodo = () => {
    if (input.trim() !== '') {
      dispatch(addTodo(input));
      setInput('');
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
