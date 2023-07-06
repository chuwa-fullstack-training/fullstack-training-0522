import React, { useState } from 'react';

const ColorBox = ({ name, color }) => (
  <div style={{ backgroundColor: color, width: '100px', height: '100px', margin: '10px auto' }}>
    {name}
  </div>
);

const App = () => {
  const [colorBoxes, setColorBoxes] = useState([
    { name: 'Box 1', color: 'red' },
    { name: 'Box 2', color: 'blue' },
    // Add more boxes as needed
  ]);
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colorBoxes[0].color);

  const handleBoxChange = (event) => {
    const selectedIndex = event.target.value;
    setSelectedBoxIndex(selectedIndex);
    setSelectedColor(colorBoxes[selectedIndex].color);
  };

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);

    const newColorBoxes = [...colorBoxes];
    newColorBoxes[selectedBoxIndex].color = newColor;
    setColorBoxes(newColorBoxes);
  };

  return (
    <div>
      <select value={selectedBoxIndex} onChange={handleBoxChange}>
        {colorBoxes.map((box, index) => (
          <option key={index} value={index}>
            {box.name}
          </option>
        ))}
      </select>

      <select value={selectedColor} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        {/* Add more colors as needed */}
      </select>

      {colorBoxes.map((box, index) => (
        <ColorBox key={index} name={box.name} color={box.color} />
      ))}
    </div>
  );
};

export default App;
