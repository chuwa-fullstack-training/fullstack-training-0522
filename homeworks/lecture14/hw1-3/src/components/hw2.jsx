import React from "react";
import Card from "./card";
import ColorController from "./colorControl";
import BoxController from "./boxControl";

class Hw2 extends React.Component {
  state = {
    colors: {},
    names: {
      1: "first",
      2: "second",
      3: "third",
      4: "fourth",
      5: "fifth",
      6: "sixth",
    },
    selectedId: null,
  };

  handleNameChange = (id, newName) => {
    console.log(id, newName);
    this.setState((prevState) => ({
      ...prevState,
      names: { ...prevState.names, [id]: newName },
    }));
  };

  handleCardSelection = (e) => {
    this.setState((prevState) => ({
      ...prevState,
      selectedId: parseInt(e.target.value),
    }));
  };

  handleColorSelection = (e) => {
    if (this.state.selectedId) {
      this.setState(
        (prevState) => ({
          ...prevState,
          colors: {
            ...prevState.colors,
            [prevState.selectedId]: e.target.value,
          },
        }),
        () => console.log(555, this.state)
      );
    }
  };

  render() {
    return (
      <div className="hw2">
        <BoxController
          names={this.state.names}
          handleCardSelection={this.handleCardSelection}
        />
        <ColorController handleColorSelection={this.handleColorSelection} />
        <div className="card-container">
          {Object.entries(this.state.names).map(([id, name]) => {
            return (
              <Card
                id={id}
                color={this.state.colors[id] ?? "red"}
                name={name}
                handleNameChange={this.handleNameChange}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
export default Hw2;
