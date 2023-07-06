import './App.css';
import { Route, Routes } from "react-router-dom";
import React, {useState} from "react";


import Components from './components/Components';
import Component from './components/Component';

function App() {

  const [components, setComponents] = useState([
    {id:1, name: 'first', color: 'white'},
    {id:2, name: 'second', color: 'red'},
    {id:3, name: 'third', color: 'white'},
    {id:4, name: 'fourth', color: 'yellow'},
    {id:5, name: 'fifth', color: 'white'},
    {id:6, name: 'sixth', color: 'green'},
    {id:7, name: 'seventh', color: 'white'},
    {id:8, name: 'eighth', color: 'blue'},
  ]);

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Components components={components}/>} />
      <Route path=":id" element={<Component components={components}/>} />
    </Routes>
  </div>
  );
}

export default App;
