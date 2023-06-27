import './Hw2.css';
import React, { useState, useEffect } from 'react';
import { Autocomplete, TextField } from '@mui/material';

function SelectorController({ components, callback }) {
      const handleSelect = (e, value) => {
            return callback(value);
      }

      return (
            <Autocomplete
                  className='controller'
                  options={components}
                  getOptionLabel={(option) => option?.name || ""}
                  sx={{ width: 200, height: 50 }}
                  renderInput={(component) => (
                        <TextField {...component} variant={component.name} label="Select Component" />
                  )}
                  onChange={handleSelect}
            />
      )
}

function ColorController({ colors, callback }) {
      const handleSelect = (e, value) => {
            return callback(value);
      }

      return (
            <Autocomplete
                  className='controller'
                  options={colors}
                  getOptionLabel={(option) => option?.name || ""}
                  sx={{ width: 200, height: 50 }}
                  renderInput={(color) => (
                        <TextField {...color} variant={color.name} label="Select Color" />
                  )}
                  onChange={handleSelect}
            />
      )
}

function Component({ component, callback }) {
      const handleChange = (e) => {
            if (e.key === 'Enter') {
                  return callback(component, e.target.value);
            }
      }

      return (
            <div className="component" style={{ backgroundColor: component.color }}>
                  <p><b>Component: name</b></p>
                  <TextField label={component.name} onKeyDown={handleChange} />
            </div >
      )
}

function Hw2() {
      const [components, setComponents] = useState([
            { name: 'first', color: "initial" },
            { name: 'second', color: "initial" },
            { name: 'third', color: "initial" },
            { name: 'fourth', color: "initial" },
            { name: 'fifth', color: "initial" },
            { name: 'sixth', color: "initial" }
      ]);
      const [colors, setColors] = useState([
            { name: "Light Blue", color: "#E1F5FE" },
            { name: "Light Gray", color: "#F5F5F5" },
            { name: "Light Green", color: "#E8F5E9" },
            { name: "Light Yellow", color: "#FFFDE7" },
            { name: "Light Pink", color: "#F8BBD0" },
            { Gray: "Light Purple", color: "#E1BEE7" }

      ]);
      const [selectedComponent, setSelectedComponent] = useState(null);
      const [selectedColor, setSelectedColor] = useState(null);

      const handleSelectedComponent = (component) => {
            setSelectedComponent(component);
      }

      const handleSelectedColor = (color) => {
            setSelectedColor(color);
      }

      const handleTextClick = (component, text) => {
            const idx = components.indexOf(component);
            const newComponents = [...components];
            newComponents[idx].name = text;
            setComponents(newComponents);
      }

      const backgroundColor = (component) => {
            if (selectedColor !== null && selectedColor !== null && selectedComponent === component) {
                  component.color = selectedColor.color;
                  return { backgroundColor: selectedColor.color };
            }
      }

      return (
            <div className='Hw2'>
                  <div className="controllers">
                        <SelectorController components={components} callback={handleSelectedComponent} />
                        <ColorController colors={colors} callback={handleSelectedColor} />
                  </div>

                  <div className='components'>
                        {
                              components.map(component => (
                                    <Component key={component.name} color={backgroundColor(component)} component={component} callback={handleTextClick} />
                              ))
                        }
                  </div>

            </div>
      )

}

export default Hw2;