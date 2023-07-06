import React from "react";
import Operations from "./Operations";
import { connect } from "react-redux";

function TodoList({ checkOne, todos }) {
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
                      onChange={() => checkOne(id)}
                    />
                    <as>{name}</as>
                  </li>
                );
              })
            : null}
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state, // Assuming your state contains the todos
});

const mapDispatchToProps = (dispatch) => ({
  checkOne: (id) => dispatch({ type: "CHECK_ONE", id: id }),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
