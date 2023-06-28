import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ColorController from "./ColorController";
import BoxController from "./BoxController";
export default function Box() {
  const [color, setColor] = useState();
  const [name, setName] = useState(useParams().box);
  const [boxes, setBoxes] = useState();
  const id = localStorage.getItem("id");

  useEffect(() => {
    const boxesInfo = JSON.parse(localStorage.getItem("boxes"));
    setBoxes(boxesInfo);
    setColor(boxesInfo[id].color);
  }, []);

  const handleName = (e) => {
    setName(e.target.value);
    setBoxes({ ...boxes, [id]: { ...boxes[id], name: e.target.value } });
    localStorage.setItem(
      "boxes",
      JSON.stringify({
        ...boxes,
        [id]: { name: e.target.value, color: color },
      })
    );
  };

  const handleColor = (e) => {
    setColor(e.target.value);
    setBoxes({ ...boxes, [id]: { ...boxes[id], color: e.target.color } });
    localStorage.setItem(
      "boxes",
      JSON.stringify({
        ...boxes,
        [id]: { name: name, color: e.target.value },
      })
    );
  };

  return (
    <div style={{ background: `${color}` }}>
      <BoxController boxes={boxes} newName={name}/>
      <ColorController handleColor={handleColor} />
      <div className="card">
        <p>Component Name:</p>
        <input type="text" onChange={(e) => handleName(e)} value={name} />
      </div>
    </div>
  );
}
