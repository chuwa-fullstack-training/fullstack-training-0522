import React from "react";

class Card extends React.Component {
  state = {
    id: this.props.id,
    name: this.props.name,
  };
  handleChange = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      name: e.target.value,
    }));
    this.props.handleNameChange(this.state.id, e.target.value);
  };

  render() {
    return (
      <div className="card" style={{ background: `${this.props.color}` }}>
        <p>Component Name:</p>
        <input
          type="text"
          onChange={(e) => this.handleChange(e)}
          value={this.state.name}
        />
      </div>
    );
  }
}

export default Card;
