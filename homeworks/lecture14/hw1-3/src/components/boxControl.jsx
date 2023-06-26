import React from "react";
class BoxController extends React.Component {
  render() {
    return (
      <select
        className="card-selection"
        onChange={(e) => this.props.handleCardSelection(e)}
      >
        <option value="">Select a Box</option>
        {Object.entries(this.props.names).map(([id, name]) => {
          console.log(666, id, name);
          return (
            <option key={id} value={id}>
              {name}
            </option>
          );
        })}
      </select>
    );
  }
}

export default BoxController;
