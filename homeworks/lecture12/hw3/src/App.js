// import logo from './logo.svg';
import "./App.css";
import React from "react";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  increment = (amount) => {
    this.setState((prevState) => ({ count: prevState.count + amount }));
  };

  reset = () => {
    this.setState({ count: 0 });
  };

  render() {
    const { count } = this.state;
    return (
      <div>
        <h1>Counter</h1>
        <div className="button">
          <button onClick={() => this.increment(1)}>+1</button>
          <button onClick={() => this.increment(10)}>+10</button>
          <button onClick={() => this.increment(100)}>+100</button>
          <button onClick={() => this.increment(1000)}>+1000</button>
        </div>
        {count > 0 && (
          <button className="reset-button" onClick={this.reset}>
            Reset
          </button>
        )}
        <p className="count">{count}</p>
      </div>
    );
  }
}

export default Counter;
