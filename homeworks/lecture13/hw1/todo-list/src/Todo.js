import './Todo.css';
import React, { useState  } from 'react';

function Todo() {

  const [inputValue, setInputValue] = useState('');

  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);

  function TodoList() {
    return (
      todos.map(todo => (
        <div key={todo.id} className='mark'>
          <input type="checkbox" checked={todo.completed} onChange={() => toggleComplete(todo.id)} />
          <p>{todo.value}</p>
        </div>
      ))
    );
  }
  
  const toggleComplete = (id) => {
    console.log(id)
    setTodos(todos.map(todo => todo.id===id? {...todo, completed:!todo.completed} : todo))
  }


  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setCount(count => {
        const newCount = count + 1;
        setTodos([...todos, { id: newCount, value: inputValue, completed: false }]);
        return newCount;
      });
      setInputValue('');  // 清空输入框
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearAllTodos = () => {
    const newTodos = todos.map(todo => todo.completed ? { ...todo, completed: false } : todo);
    setTodos(newTodos);
  }

  return (
    <div className="Todo">
      <h1>Todos-ReactJs</h1>
      <input type="text" placeholder="Type a todo and hit Enter" value={inputValue} onChange={handleChange} onKeyDown={handleKeyDown}></input>
      <p>{todos.filter(todo=> todo.completed).length} remaining</p>
      <button type="button" onClick={clearAllTodos}>Clear Completed Todos</button>
      <div className="markalldown">
        <input type="checkbox" checked={todos.length!==0 && todos.filter(todo=>todo.completed).length===todos.length} onChange={
          /*
          状态更新可能是异步的。换句话说，React可能不会立即更新状态，而是在稍后的某个时间更新状态。如果你在一个循环中多
          次调用setTodos，那么一些更新可能会丢失。为了解决这个问题，你可以创建一个新的待办事项列表，将需要更改的待办事项
          标记为已完成，然后只调用一次setTodos*/
          () => {
            const newTodos = todos.map(todo => !todo.completed ? { ...todo, completed: true } : todo);
            setTodos(newTodos);
          }} />
        <p>Mark All Done</p>
      </div>

      <TodoList />
    </div>
  );
}

export default Todo;
