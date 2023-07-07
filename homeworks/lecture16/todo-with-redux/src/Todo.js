import './Todo.css';

import React, { useState ,useEffect } from 'react';
import { addTodo, toggleOneComplete, toggleAllComplete, clearComplete} from './redux/actions'
import store from './redux/store';


function Todo() {

  const [inputValue, setInputValue] = useState('');

  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return () => unsubscribe();
  }, []);

  function TodoList() {
    return (
      state.todos.map(todo => (
        <div key={todo.id} className='mark'>
          <input type="checkbox" checked={todo.completed} onChange={() => handletoggleOneComplete(todo.id)} />
          <p>{todo.value}</p>
        </div>
      ))
    );
  }
  
  const handleKeyDownRedux = (e) => {
    console.log("input is: ", inputValue)
    if (e.key === 'Enter') {
      console.log("Enter is pressed")
      store.dispatch(addTodo(state.count, inputValue));
      setInputValue('');
    }
  };

  const handleclearComplete = () => {
    store.dispatch(clearComplete());
  }

  const handletoggleAllComplete = () => {
    store.dispatch(toggleAllComplete());
  }

  const handletoggleOneComplete = (id) => {
    store.dispatch(toggleOneComplete(id));
  }

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="Todo">
      <h1>Todos-ReactJs</h1>
      <input type="text" placeholder="Type a todo and hit Enter" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDownRedux}></input>
      <p>{state.todos.filter(todo=> todo.completed).length} remaining</p>
      <button type="button" onClick={handleclearComplete}>Clear Completed Todos</button>
      <div className="markalldown">
        <input type="checkbox" checked={state.todos.length!==0 && state.todos.filter(todo=>todo.completed).length===state.todos.length} onChange={handletoggleAllComplete} />
        <p>Mark All Done</p>
      </div>

      <TodoList />
    </div>
  );
}

export default Todo;