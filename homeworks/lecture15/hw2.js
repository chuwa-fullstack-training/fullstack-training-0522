import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const ColorBox = ({ name, color }) => (
  <div style={{ backgroundColor: color, width: '100px', height: '100px', margin: '10px auto' }}>
    {name}
  </div>
);

const Box = ({ match, colorBoxes }) => {
  const selectedBox = colorBoxes.find(box => box.name === match.params.boxName);
  return selectedBox ? <ColorBox name={selectedBox.name} color={selectedBox.color} /> : null;
};

const Home = ({ colorBoxes, setColorBoxes }) => {
  const [selectedColor, setSelectedColor] = useState(colorBoxes[0].color);

  const handleColorChange = (event) => {
    const newColor = event.target.value;
    setSelectedColor(newColor);

    const newColorBoxes = [...colorBoxes];
    newColorBoxes[0].color = newColor;
    setColorBoxes(newColorBoxes);
  };

  return (
    <div>
      <select value={selectedColor} onChange={handleColorChange}>
        <option value="red">Red</option>
        <option value="blue">Blue</option>
        {/* Add more colors as needed */}
      </select>

      {colorBoxes.map((box, index) => (
        <Link key={index} to={`/box/${box.name}`}>
          {box.name}
        </Link>
      ))}
    </div>
  );
};

const App = () => {
  const [colorBoxes, setColorBoxes] = useState([
    { name: 'Box 1', color: 'red' },
    { name: 'Box 2', color: 'blue' },
    // Add more boxes as needed
  ]);

  return (
    <Router>
      <Route
        path="/"
        exact
        render={(props) => <Home {...props} colorBoxes={colorBoxes} setColorBoxes={setColorBoxes} />}
      />
      <Route
        path="/box/:boxName"
        render={(props) => <Box {...props} colorBoxes={colorBoxes} />}
      />
    </Router>
  );
};

export default App;
