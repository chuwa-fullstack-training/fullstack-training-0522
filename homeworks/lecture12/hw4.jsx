import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 0,
      displayValue: 0
    };
  }

  handleInputChange = (event) => {
    this.setState({ inputValue: event.target.value });
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.setState({ displayValue: this.state.inputValue });
    }
  };

  numberToOrdinal = (n) => {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  };

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <input
          type="number"
          value={this.state.inputValue}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          style={{ width: "30%", textAlign: "center" }}
        />
        <div
          style={{
            width: "30%",
            textAlign: "center",
            border: "1px solid black",
            padding: "10px"
          }}
        >
          {this.numberToOrdinal(this.state.displayValue)}
        </div>
      </div>
    );
  }
}

export default App;
