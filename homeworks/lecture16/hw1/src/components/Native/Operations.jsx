import React, { useState } from "react";
import { connect } from "react-redux";
function Operations({ checkAll, remove, todos }) {
  const [checked, setChecked] = useState(false);
  const handleCheck = (e) => {
    console.log(e.target.checked);
    checkAll(e.target.checked);
    setChecked(!checked);
  };
  return (
    <div className="operations-container">
      <div className="row">
        <p style={{ display: "inline-block" }}>
          {Object.entries(todos).filter((id, { name, done }) => !done).length}
          &nbsp;remaining
        </p>
        <button onClick={() => remove()}>Clear Completed Todos</button>
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

const mapStateToProps = (state) => ({
  todos: state, // Assuming your state contains the todos
});

const mapDispatchToProps = (dispatch) => ({
  checkAll: (checked) => dispatch({ type: "CHECK_ALL", checked: checked }),
  remove: () => dispatch({ type: "REMOVE" }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Operations);
