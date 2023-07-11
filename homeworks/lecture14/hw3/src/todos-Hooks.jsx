import './todos.css';
import React, { useState, useEffect } from 'react';

const ToDos = (props) => {
    return (
        <div class='todo-list'>
            <input
                type='checkbox'
                key={props.key}
                onClick={props.handleCheckOneElement(props.todo)}
                checked={props.todo.isChecked}
                value={props.todo.todo}
            ></input>
            {props.todo.todo}
        </div>
    );
};

export default function todos() {
    const [value, setValue] = useState('');
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    const onChange = (e) => {
        setValue(e.target.value);
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            setTodos(
                todos.concat({
                    todo: e.target.value,
                    isChecked: false,
                })
            );
            setCount(count + 1);
            setValue('');
        }
    };

    const handleAllChecked = (e) => {
        const newToDos = todos.map((todo) => {
            todo.isChecked = e.target.checked;
            return todo;
        });
        setTodos(newToDos);
    };
    const handleCheckOneElement = (todo) => (e) => {
        const indexToCheck = todos.indexOf(todo);
        const newToDos = [...todos];
        newToDos[indexToCheck].isChecked = e.target.checked;
        setTodos(newToDos);
    };

    const onDeleteTask = () => {
        setTodos(todos.filter((todo) => !todo.isChecked));
    };

    useEffect(() => {
        const checkedTodos = todos.filter((todo) => todo.isChecked);
        setCount(todos.length - checkedTodos.length);
    }, [todos]);
    return (
        <div>
            <header class='header'>Todos-ReactJs</header>
            <div>
                <input
                    placeholder='Type a todo and hit Enter'
                    value={value}
                    onChange={onChange}
                    onKeyDown={handleKeyDown}
                />
                <div className='status-bar'>
                    <p class='remaining'>{count} remaining</p>{' '}
                    <button onClick={onDeleteTask} class='clear-completed'>
                        Clear Completed Todos
                    </button>
                </div>
            </div>
            <div>
                <input type='checkbox' onClick={handleAllChecked} />
                Mark All Done
                {todos.map((todo_, index) => {
                    return (
                        <ToDos
                            key={index}
                            handleCheckOneElement={handleCheckOneElement}
                            todo={todo_}
                        />
                    );
                })}
            </div>
        </div>
    );
}
