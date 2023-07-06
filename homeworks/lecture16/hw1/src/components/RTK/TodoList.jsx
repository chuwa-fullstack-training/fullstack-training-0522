import React from "react";
import Operations from "./Operations";
import { useSelector, useDispatch } from "react-redux";
import { checkOne } from "../../reducer/redux-rtk";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <div className="list-container">
      <Operations />
      <div className="todo-list">
        <ul>
          {todos
            ? Object.entries(todos).map(([id, { name, done }]) => {
                return (
                  <li>
                    <input
                      type="checkbox"
                      key={id}
                      id={id}
                      checked={done}
                      onChange={() => dispatch(checkOne(id))}
                    />
                    <a>{done}</a>
                    <a>{name}</a>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}
