import React from 'react';

import './App.css';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      input: ""
    };
  }

  addTodo = () => {
    const { todos, input } = this.state;
    if (input.trim() !== "") {
      const newTodo = { id: todos.length, title: input, completed: false };
      this.setState({
        todos: [...todos, newTodo],
        input: ""
      });
    }
  };

  toggleTodo = (id) => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    this.setState({
      todos: updatedTodos
    });
  };

  markAllCompleted = () => {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo) => ({
      ...todo,
      completed: true
    }));
    this.setState({
      todos: updatedTodos
    });
  };

  clearCompleted = () => {
    const { todos } = this.state;
    const updatedTodos = todos.filter((todo) => !todo.completed);
    this.setState({
      todos: updatedTodos
    });
  };

  getActiveTodosCount = () => {
    const { todos } = this.state;
    return todos.filter((todo) => !todo.completed).length;
  };

  handleInputChange = (e) => {
    this.setState({
      input: e.target.value
    });
  };

  render() {
    const { todos, input } = this.state;
    const activeTodosCount = this.getActiveTodosCount();

    return (
      <>
        <h1>Todo List</h1>

        <div>
          <input type='text' value={input} onChange={this.handleInputChange} />
          <button onClick={this.addTodo}>Add Todo</button>
        </div>

        <div>
          <p>{activeTodosCount} remaining</p>
          <button onClick={this.clearCompleted}>Clear Completed Todos</button>
        </div>
        <div>
          <button onClick={this.markAllCompleted}>Mark All Done</button>
        </div>
        <div>
          <ul>
            {todos.map((todo) => (
              <li
                key={todo.id}
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
                onClick={() => this.toggleTodo(todo.id)}
              >
                {todo.title}
              </li>
            ))}
          </ul>
        </div>
      </>
    );
  }
}

export default TodoList;
