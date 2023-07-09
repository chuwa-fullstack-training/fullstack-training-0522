import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HW1 from './hw1'
import HW2 from './hw2'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Component from "./components/Component";
// import 'antd/dist/antd.css'; 

function App() {
  
  return (
    <>
      {/* <HW1></HW1> */}
      <div className="Routers">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<HW2 />} />
                <Route path="/component" element={<Component />} />
                <Route path="*" element={<p> 404 no page </p>} />
            </Routes>
            </BrowserRouter>
      </div>
    </>
  )
}

export default App
