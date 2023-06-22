import React from "react";

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: {}, maxId: 0, name: "", incompleted: 0 }; //id:{name: string, done: boolean}
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.handleSubmit();
    }
  };

  handleSubmit = () => {
    console.log(this.state.todos);
    this.setState((prevState) => ({
      todos: {
        ...prevState.todos,
        [prevState.maxId + 1]: { name: this.state.name, done: false },
      },
      name: "",
      maxId: prevState.maxId + 1,
      incompleted: prevState.incompleted + 1,
    }));
  };

  handleRemoveCompleted = () => {
    const incompleted = Object.fromEntries(
      Object.entries(this.state.todos).filter(
        ([id, value]) => value.done === false
      )
    );
    console.log(incompleted);
    this.setState((prevState) => ({
      ...prevState,
      todos: incompleted,
      incompleted: Object.entries(incompleted).length,
    }));
  };

  handleCheck = (e) => {
    const id = parseInt(e.target.id);
    this.setState((prevState) => ({
      ...prevState,
      todos: {
        ...prevState.todos,
        [id]: { ...prevState.todos[id], done: !prevState.todos[id].done },
      },
      incompleted: e.target.checked
        ? prevState.incompleted - 1
        : prevState.incompleted + 1,
    }));
  };

  handleCheckAll = (e) => {
    const newTodos = Object.entries({ ...this.state.todos }).reduce(
      (acc, [id, value]) => {
        acc[id] = { ...value, done: e.target.checked };
        return acc;
      },
      {}
    );
    const incompleted = e.target.checked
      ? 0
      : Object.entries(this.state.todos).length;
    this.setState((prevState) => ({
      ...prevState,
      todos: newTodos,
      incompleted: incompleted,
    }));
  };

  render() {
    return (
      <div className="todo">
        <h1>Todo List - React</h1>
        <input
          id="todo-input"
          onChange={(e) => {
            this.setState((prevState) => ({
              ...prevState,
              name: e.target.value,
            }));
          }}
          onKeyPress={this.handleKeyPress}
          placeholder="input your todo here"
          value={this.state.name}
        />
        {/* <button onClick={this.handleSubmit}>Add Todo</button> */}
        <div id="todo-line">
          <label htmlFor="todo-list">{this.state.incompleted} remaining</label>
          <button onClick={this.handleRemoveCompleted}>
            Clear Completed Todos
          </button>
        </div>
        <div>
          <input
            type="checkbox"
            id="check-all"
            onChange={(e) => this.handleCheckAll(e)}
          />
          <label htmlFor="check-all">Mark All Done</label>
        </div>
        <ul id="todo-list">
          {Object.entries(this.state.todos).map(([id, value]) => {
            return (
              <li key={id} id="todo-item">
                <input
                  type="checkBox"
                  id={id}
                  checked={value.done}
                  onChange={(e) => this.handleCheck(e)}
                />
                <div>{value.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Todo;
