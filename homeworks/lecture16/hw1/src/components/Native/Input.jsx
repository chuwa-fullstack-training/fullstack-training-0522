import React, { useState } from "react";
import { connect } from "react-redux";
function Input({ addTodo }) {
  const [name, setName] = useState();

  const handleName = (e) => setName(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(name);
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

const mapDispatchToProps = (dispatch) => ({
  addTodo: (name) => dispatch({ type: "ADD", name: name }),
});

export default connect(null, mapDispatchToProps)(Input);
