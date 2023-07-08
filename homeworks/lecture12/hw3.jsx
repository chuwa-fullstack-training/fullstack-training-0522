import React from "react";

class Hw3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }

  handleAdd = (e) => {
    const num = parseInt(e.target.value);
    this.setState((prevState) => ({ count: prevState.count + num }));
  };

  render() {
    return (
      <div className="hw3">
        <h2 style={{ border: "none", borderTop: "dotted red 3px", paddingTop: "1rem"}}>Homework3</h2>
        <div className="button-list">
          <button onClick={(e) => this.handleAdd(e)} value="1" >1</button>
          <button onClick={(e) => this.handleAdd(e)} value="10" >10</button>
          <button onClick={(e) => this.handleAdd(e)} value="100" >100</button>
          <button onClick={(e) => this.handleAdd(e)} value="1000" >1000</button>
        </div>
        <div className="sum-displayer">{this.state.count}</div>
        <button id="reset" onClick={() => this.setState({ count: 0 })}>Reset</button>
      </div>
    );
  }
}

export default Hw3;