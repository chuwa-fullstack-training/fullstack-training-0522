// import './App.css';
import './ColorComponent.css'
import React, { useState } from 'react';
// import axios from "axios";
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';


function ColorChange() {

  const [selectedComponent, setSelectedComponent] = useState('first');

  const [components, setComponents] = useState([
    {id:1, name: 'first', color: 'white'},
    {id:2, name: 'second', color: 'white'},
    {id:3, name: 'third', color: 'white'},
    {id:4, name: 'fourth', color: 'white'},
  ]);

  const [colors, setColors] = useState([
    {id:1, name: 'red'},
    {id:2, name: 'yellow'},
    {id:3, name: 'green'},
    {id:4, name: 'blue'},
  ]);

  // const [inputValue, setInput] = useState("");

  function ComponentSelector(){
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={components}
        getOptionLabel={(option) => option.name}
        onChange={e => handleComponentChange(e)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={components[0].name} />}
      />
    );
  }

  function ColorSelector(){
    return (
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={colors}
        getOptionLabel={(option) => option.name}
        onChange={e => handleColorChange(e)}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label={colors[0].name} />}
      />
    );
  }

  const handleComponentChange = (e) => {
    setSelectedComponent(e.target.innerHTML);
  }

  const handleColorChange = (e) => {
    setComponents(components.map(component => {
      if (component.name === selectedComponent) {
        return {...component, color: e.target.innerHTML};
      } else {
        return component;
      }
    }));
  }

  const handleChange = (e, index) => {
    // setComponents([...components, {id: index, name: e.target.value}]);
    e.preventDefault();
    setComponents(components.map(component=>(component.id===index? 
        {...component, name: e.target.value}: component)))
  }

  return (
    <div className="App">
      <div className='navbar'>
        <ComponentSelector />
        <ColorSelector />
      </div>

      <div className='componentsContent'>
        {components.map((component=>(
          <div className="card" key={component.id} style={{ backgroundColor: component.color, width: '200px', height: '200px' }}>
            <p>Component Name:</p>
            <input type="text" value={component.name} onChange={(e)=>handleChange(e, component.id)}/>
          </div>
        )))}
      </div>
    </div>
  );
}

export default ColorChange;