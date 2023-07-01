import './styles.css';
import React from 'react';

const ToDos = (props) => {
  return (
    <div class='todo-list'>
      <input
        type='checkbox'
        key={props.id}
        onClick={props.handleCheckOneElement}
        checked={props.isChecked}
        value={props.todo}
      ></input>
      {props.todo}
    </div>
  );
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      todos: [],
      count: 0,
      id: 0,
    };
  }
  onChange = (e) => {
    this.setState({ value: e.target.value });
  };

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.setState({
        todos: this.state.todos.concat({
          id: this.state.id + 1,
          todo: e.target.value,
          isChecked: false,
        }),
      });
      this.setState({ count: this.state.count + 1 });
      this.setState({ value: '' });
    }
  };

  handleAllChecked = (e) => {
    let todos = this.state.todos;
    todos.forEach((todo) => (todo.isChecked = e.target.checked));
    this.setState({ todos: todos });
  };
  handleCheckOneElement = (e) => {
    let todos = this.state.todos;
    todos.forEach((todo) => {
      if (todo.todo === e.target.value) {
        todo.isChecked = e.target.checked;
      }
    });
    this.setState({ todos: todos });
  };

  onDeleteTask = () => {
    this.setState({
      todos: this.state.todos.filter((todo) => todo.isChecked !== true),
    });
  };
  render() {
    return (
      <div>
        <header class='header'>Todos-ReactJs</header>
        <div>
          <input
            placeholder='Type a todo and hit Enter'
            value={this.state.value}
            onChange={this.onChange}
            onKeyDown={this.handleKeyDown}
          />
          <p class='remaining'>{this.state.count} remaining</p>{' '}
          <button onClick={this.onDeleteTask} class='clear-completed'>
            Clear Completed Todos
          </button>
        </div>
        <div>
          <input type='checkbox' onClick={this.handleAllChecked} />
          Mark All Done
          {this.state.todos.map((todo_, index) => {
            return (
              <ToDos
                key={index}
                handleCheckOneElement={this.handleCheckOneElement}
                {...todo_}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default App;
