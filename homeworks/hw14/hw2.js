import React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import './styles.css';


export default function BasicSelect() {
  const [age, setAge] = useState('');
  const [color, setcolor] = useState('');
  const [myform, setmyform] = useState(['first','second','third','fourth', 'fifth', 'sixth']);

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(event.target.value);
  };

  const handleClcik = (e,original) => {

    console.log(e.target.value);
    const copy = myform;
    var index = copy.indexOf(original);
    if (~index) copy[index] = e.target.value;
    setmyform(copy);
    console.log([...copy]);
  };

  const list = myform.map((arr) => (
    <div className="grid-container">
        <label htmlFor="username"></label>
        <input type="text" className="grid-item" onChange={e=>handleClcik(e,arr)}   defaultValue = {arr}/> 
    </div>
));

  return (
    <div>
    <Box sx={{ minWidth: 120 }}>
    <FormControl fullWidth>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value={0}>{myform[0]}</MenuItem>
        <MenuItem value={1}>{myform[1]}</MenuItem>
        <MenuItem value={2}>{myform[2]}</MenuItem>
        <MenuItem value={3}>{myform[3]}</MenuItem>
        <MenuItem value={4}>{myform[4]}</MenuItem>
        <MenuItem value={5}>{myform[5]}</MenuItem>
      </Select>
    </FormControl>
  </Box>



{list}
      </div>
  );
}
