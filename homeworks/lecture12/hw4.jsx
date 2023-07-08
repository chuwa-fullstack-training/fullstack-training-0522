import React from "react";

class Hw4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      output: "",
    };
  }

  handleChange(e) {
    let input = e.target.value;
    let output = input;
    if (input && !isNaN(Number(input))) {
      let reminder = Number(input) % 10;
      if (reminder === 1) output += "st";
      else if (reminder === 2) output += "nd";
      else if (reminder === 3) output += "rd";
      else output += "th";
    }
    this.setState({ input: input, output: output });
  }
  render() {
    return (
      <div className="hw 4">
        <h2 style={{ border: "none", borderTop: "dotted red 3px", paddingTop: "1rem", width: "100%" }}>
          Homework4
        </h2>
        <input
          onChange={(e) => this.handleChange(e)}
          placeholder="provide your input"
        />
        <div className="output">{this.state.output}</div>
      </div>
    );
  }
}

export default Hw4;