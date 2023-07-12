import "./App.css";
import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const incrementCounter = (value) => {
    setCounter((prevCounter) => prevCounter + value);
  };

  const resetCounter = () => {
    setCounter(0);
  };

  return (
    <div>
      <button className="button" onClick={() => incrementCounter(1)}>
        +1
      </button>
      <button className="button" onClick={() => incrementCounter(10)}>
        +10
      </button>
      <button className="button" onClick={() => incrementCounter(100)}>
        +100
      </button>
      <button className="button" onClick={() => incrementCounter(1000)}>
        +1000
      </button>
      <button className="button" onClick={resetCounter}>
        Reset
      </button>
      <h1>{counter}</h1>
    </div>
  );
}

export default App;
