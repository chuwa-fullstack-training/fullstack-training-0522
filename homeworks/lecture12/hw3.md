![demo](https://flaviocopes.com/images/react-example-counter/output.gif)


Implement the counter shown above in React.

## Requirements

- four buttons to increment 1, 10, 100, and 1,000, respectively
- one label to display the count
- (optional) one button to reset the count
- (optional) apply styles to make it look good

import React, { useState } from 'react';
import './Counter.css'; // Assuming you're styling your components in Counter.css

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = (amount) => {
    setCount(prevCount => prevCount + amount);
  }

  const reset = () => {
    setCount(0);
  }

  return (
    <div className="counter">
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => increment(1)}>+1</button>
        <button onClick={() => increment(10)}>+10</button>
        <button onClick={() => increment(100)}>+100</button>
        <button onClick={() => increment(1000)}>+1000</button>
      </div>
      <div className="counter-reset">
        <button onClick={reset}>Reset</button>
      </div>
    </div>
  );
}

export default Counter;
