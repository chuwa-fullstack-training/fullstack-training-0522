import "./App.css";
import Hw1 from "./components/hw1";
import Hw2 from "./components/hw2";
import Hw3 from "./components/hw3";
import { useState,useEffect } from "react";

function App() {
  const [open, setOpen] = useState();

  useEffect(() =>{console.log(open)},[open])
  return (
    <div className="App">
      <button id="1" onClick={() => setOpen("1")}>
        Homework 1
      </button>
      <button id="2" onClick={() => setOpen("2")}>
        Homework 2
      </button>
      <button id="3" onClick={() => setOpen("3")}>
        Homework 3
      </button>
      {open === "1" ? (
        <Hw1 />
      ) : open === "2" ? (
        <Hw2 />
      ) : open === "3" ? (
        <Hw3 />
      ) : null}
    </div>
  );
}

export default App;
