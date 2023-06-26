import React, { useState } from "react";

export default function Hw3() {
  const [todos, setTodos] = useState({});
  const [maxId, setMaxId] = useState(0);
  const [name, setName] = useState("");
  const [incompleted, setIncompleted] = useState(0);

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    setTodos((prev) => ({
      ...prev,
      [maxId + 1]: { name: name, done: false },
    }));
    setName("");
    setMaxId((prev) => prev + 1);
    setIncompleted((prev) => prev + 1);
  };

  const handleRemoveCompleted = () => {
    const incompleted = Object.fromEntries(
      Object.entries(todos).filter(([id, value]) => value.done === false)
    );
    console.log(incompleted);
    setTodos(incompleted);
    setIncompleted(Object.entries(incompleted).length);
  };

  const handleCheck = (e) => {
    const id = parseInt(e.target.id);
    setTodos((prev) => ({
      ...prev,
      [id]: { ...prev[id], done: !prev[id].done },
    }));
    setIncompleted((prev) => (e.target.checked ? prev - 1 : prev + 1));
  };

  const handleCheckAll = (e) => {
    const newTodos = Object.entries({ ...todos }).reduce((acc, [id, value]) => {
      acc[id] = { ...value, done: e.target.checked };
      return acc;
    }, {});
    const incompleted = e.target.checked ? 0 : Object.entries(todos).length;
    setTodos(newTodos);
    setIncompleted(incompleted);
  };

  return (
    <div className="todo">
      <h1>Todo List - React</h1>
      <input
        id="todo-input"
        onChange={(e) => {
          setName(e.target.value);
        }}
        onKeyPress={handleKeyPress}
        placeholder="input your todo here"
        value={name}
      />
      <div id="todo-line">
        <label htmlFor="todo-list">{incompleted} remaining</label>
        <button onClick={handleRemoveCompleted}>Clear Completed Todos</button>
      </div>
      <div>
        <input
          type="checkbox"
          id="check-all"
          onChange={(e) => handleCheckAll(e)}
        />
        <label htmlFor="check-all">Mark All Done</label>
      </div>
      <ul id="todo-list">
        {Object.entries(todos).map(([id, value]) => {
          return (
            <li key={id} id="todo-item">
              <input
                type="checkBox"
                id={id}
                checked={value.done}
                onChange={(e) => handleCheck(e)}
              />
              <div>{value.name}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
