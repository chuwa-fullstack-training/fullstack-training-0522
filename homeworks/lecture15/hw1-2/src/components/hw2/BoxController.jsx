import React, { useState, useEffect } from "react";

export default function BoxController(props) {
  const [boxes, setBoxes] = useState({});
  const handleBoxSelection = (e) => {
    localStorage.setItem("id", e.target.options[e.target.selectedIndex].id);
    window.location.href = `/hw2/${e.target.value}`;
  };
  useEffect(() => {
    setBoxes(JSON.parse(localStorage.getItem("boxes")));
  }, [props.newName]);

  return (
    <select
      className="card-selection"
      onChange={(e) => {
        handleBoxSelection(e);
      }}
    >
      <option value="">Select a Box</option>
      {Object.entries(boxes).map(([id, val]) => {
        return (
          <option key={id} id={id} value={val.name}>
            {val.name}
          </option>
        );
      })}
    </select>
  );
}
