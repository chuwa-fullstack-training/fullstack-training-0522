import React from "react";

class Hw3 extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  result: 0
            };
      }

      handleClick = (diff) => (e) => {
            this.setState({ result: this.state.result + diff });
      };

      reset = () => {
            this.setState({ result: 0 });
      }

      render() {
            return (
                  <div>
                        <div className="CalBtns">
                              <button onClick={this.handleClick(1)}>+1</button>
                              <button onClick={this.handleClick(10)}>+10</button>
                              <button onClick={this.handleClick(100)}>+100</button>
                              <button onClick={this.handleClick(1000)}>1000</button>
                              <button onClick={this.reset}>Reset</button>
                        </div>
                        <p> Result: {this.state.result} </p>
                  </div>
            );
      }
}

export default Hw3;
