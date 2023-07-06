import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux'
import {add} from "../../reducer/redux-rtk";
export default function Input() {
  const [name, setName] = useState();
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()

  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(add(name));
    setName("");
  };

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input
        type="text"
        placeholder="input Todo..."
        onChange={(e) => handleName(e)}
        value={name}
      />
      <button type="submit">Add</button>
    </form>
  );
}
