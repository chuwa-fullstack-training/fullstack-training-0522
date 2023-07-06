import React, { useState } from 'react';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');

    const addTodo = () => {
        setTodos([...todos, { text: input, completed: false }]);
        setInput('');
    };

    const toggleTodo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const markAllCompleted = () => {
        const newTodos = todos.map(todo => ({ ...todo, completed: true }));
        setTodos(newTodos);
    };

    const clearCompleted = () => {
        const newTodos = todos.filter(todo => !todo.completed);
        setTodos(newTodos);
    };

    const activeTodos = todos.filter(todo => !todo.completed).length;

    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index} style={{ textDecoration: todo.completed ? 'line-through' : '' }} onClick={() => toggleTodo(index)}>
                        {todo.text}
                    </li>
                ))}
            </ul>
            <button onClick={markAllCompleted}>Mark All Completed</button>
            <button onClick={clearCompleted}>Clear Completed</button>
            <div>Active todos: {activeTodos}</div>
        </div>
    );
}

export default TodoApp;