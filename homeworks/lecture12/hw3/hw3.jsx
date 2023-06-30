import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  handleClick = (event) => {
    this.setState({
      count: this.state.count + Number(event.target.value),
    });
  };

  render() {
    return (
      <div>
        <button value={1} onClick={this.handleClick}>
          +1
        </button>{' '}
        <button value={10} onClick={this.handleClick}>
          +10
        </button>{' '}
        <button value={100} onClick={this.handleClick}>
          +100
        </button>
        <button value={100} onClick={this.handleClick}>
          +1000
        </button>
        <h1>{this.state.count}</h1>
      </div>
    );
  }
}

export default App;
