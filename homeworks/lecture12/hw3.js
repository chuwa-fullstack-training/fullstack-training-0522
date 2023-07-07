import { useState } from "react";
import "./styles.css";

export default function App() {
  const [count, setCount] = useState(0);
  const plus = (i) => () => setCount((prev) => prev + i);
  return (
    <div className="App">
      <div id="buttons">
        <button onClick={plus(1)}>+1</button>
        <button onClick={plus(10)}>+10</button>
        <button onClick={plus(100)}>+100</button>
        <button onClick={plus(1000)}>+1000</button>
      </div>
      <p>counter is {count}</p>
    </div>
  );
}
