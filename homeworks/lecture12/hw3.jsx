import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  handleClick1 = () => {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  };

  handleClick10 = () => {
    this.setState((prevState) => ({ count: prevState.count + 10 }));
  };

  handleClick100 = () => {
    this.setState((prevState) => ({ count: prevState.count + 100 }));
  };

  handleClick1000 = () => {
    this.setState((prevState) => ({ count: prevState.count + 1000 }));
  };

  handleClickReset = () => {
    this.setState({ count: 0 });
  };

  render() {
    return (
      <div className="App">
        <div>
          <button onClick={this.handleClick1}>+1</button>
          <button onClick={this.handleClick10}>+10</button>
          <button onClick={this.handleClick100}>+100</button>
          <button onClick={this.handleClick1000}>+1000</button>
          <button onClick={this.handleClickReset}>reset</button>
        </div>
        <br />
        <div style={{ textAlign: "center", fontSize: "2rem" }}>{this.state.count}</div>
      </div>
    );
  }
}

export default App;