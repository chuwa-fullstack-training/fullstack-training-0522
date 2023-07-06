import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { checkAll, remove } from "../../reducer/redux-rtk";
export default function Operations() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    console.log(e.target.checked);
    dispatch(checkAll(e.target.checked));
    setChecked(!checked);
  };
  return (
    <div className="operations-container">
      <div className="row">
        <p style={{ display: "inline-block" }}>
          {Object.entries(todos).filter(([id, { done }]) => !done).length}
          &nbsp;remaining
        </p>
        <button onClick={() => dispatch(remove())}>
          Clear Completed Todos
        </button>
      </div>
      <div className="row">
        <input
          type="checkbox"
          onChange={(e) => handleCheck(e)}
          checked={checked}
        />
        <a>Mark All Done</a>
      </div>
    </div>
  );
}
