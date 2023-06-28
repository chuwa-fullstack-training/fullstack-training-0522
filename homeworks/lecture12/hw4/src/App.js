import "./App.css";

import React from "react";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      outputValue: "",
    };
  }

  handleInput = (e) => {
    const inputValue = e.target.value;
    const outputValue = this.convertToOrdinal(inputValue);
    this.setState({ inputValue, outputValue });
  };

  convertToOrdinal = (input) => {
    if (!input || isNaN(input)) {
      return input;
    }

    const number = parseInt(input, 10);
    const suffixes = ["th", "st", "nd", "rd"];
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    let suffix = "th";
    if (lastTwoDigits < 11 || lastTwoDigits > 13) {
      suffix = suffixes[lastDigit] || suffix;
    }

    return number + suffix;
  };
  render() {
    const { inputValue, outputValue } = this.state;
    return (
      <div>
        <h1>Ordinal Number Converter</h1>
        <form>
          <div className="form-group">
            <label htmlFor="input">Input: </label>
            <input
              type="text"
              id="input"
              value={inputValue}
              onChange={this.handleInput}
            />
          </div>
          <div className="form-group">
            <label htmlFor="output">Output:</label>
            <input type="text" id="output" value={outputValue} readOnly />
          </div>
        </form>
      </div>
    );
  }
}

export default App;
