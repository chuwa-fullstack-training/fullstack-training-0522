import React from "react";
import Card from "./card";

const colorNames = [
  "AliceBlue",
  "AntiqueWhite",
  "Aqua",
  "Aquamarine",
  "Azure",
  "Beige",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DodgerBlue",
  "FireBrick",
  "FloralWhite",
  "ForestGreen",
  "Fuchsia",
  "Gainsboro",
  "GhostWhite",
  "Gold",
  "GoldenRod",
  "Gray",
  "Green",
  "GreenYellow",
  "HoneyDew",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Ivory",
  "Khaki",
  "Lavender",
  "LavenderBlush",
  "LawnGreen",
  "LemonChiffon",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGoldenRodYellow",
  "LightGray",
];

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
        <select
          className="card-selection"
          onChange={(e) => this.handleCardSelection(e)}
        >
          <option value="">Select a Box</option>
          {Object.entries(this.state.names).map(([id, name]) => {
            console.log(666, id, name);
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
        <select
          className="color-selection"
          onChange={(e) => this.handleColorSelection(e)}
        >
          <option value="">Select a Color</option>
          {colorNames.map((color) => {
            return (
              <option key={color} value={color}>
                {color}
              </option>
            );
          })}
        </select>
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
