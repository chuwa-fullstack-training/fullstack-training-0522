import React from "react";
import "./App.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ newTodo: event.target.value });
  };

  handleAddTodo = () => {
    const { todos, newTodo } = this.state;
    if (newTodo.trim() !== "") {
      const newTodos = [...todos, { text: newTodo, completed: false }];
      this.setState({ todos: newTodos, newTodo: "" });
    }
  };

  handleToggleTodo = (index) => {
    const { todos } = this.state;
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    this.setState({ todos: updatedTodos });
  };

  handleMarkAllCompleted = () => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      return { ...todo, completed: true };
    });
    this.setState({ todos: updatedTodos });
  };

  handleClearCompleted = () => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => !todo.completed);
    this.setState({ todos: updatedTodos });
  };

  render() {
    const { todos, newTodo } = this.state;
    const activeTodos = todos.filter((todo) => !todo.completed);

    return (
      <div>
        <h1>Todo List</h1>
        <div>
          <input
            className="input"
            type="text"
            value={newTodo}
            onChange={this.handleInputChange}
          />
          <button className="button" onClick={this.handleAddTodo}>
            Add Todo
          </button>
        </div>
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              <input
                className="input"
                type="checkbox"
                checked={todo.completed}
                onChange={() => this.handleToggleTodo(index)}
              />
              <span className={todo.completed ? "completed" : ""}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
        <div>
          <button className="button" onClick={this.handleMarkAllCompleted}>
            Mark All Completed
          </button>
          <button className="button" onClick={this.handleClearCompleted}>
            Clear Completed
          </button>
        </div>
        <p>Number of active todos: {activeTodos.length}</p>
      </div>
    );
  }
}

export default TodoList;
