import './App.css';
import React, { useState } from 'react';

function App() {
  const [inputNumber, setInputNumber] = useState('');
  const [outputRank, setOutputRank] = useState('');

  const convertToRank = (number) => {
    if (number === ''){
      return '';
    }
    if (!isNaN(number)) {
      const lastDigit = number % 10;
      const secondLastDigit = Math.floor((number / 10) % 10);

      let rankSuffix = 'th';

      if (secondLastDigit !== 1) {
        if (lastDigit === 1) {
          rankSuffix = 'st';
        } else if (lastDigit === 2) {
          rankSuffix = 'nd';
        } else if (lastDigit === 3) {
          rankSuffix = 'rd';
        }
      }

      return number + rankSuffix;
    } else {
      return number;
    }
  };

  const handleInputChange = (event) => {
    setInputNumber(event.target.value);
    setOutputRank(convertToRank(event.target.value));
  };

  return (
    <div>
      <input type="text" value={inputNumber} onChange={handleInputChange} placeholder="Enter a number" />
      <p>Output: {outputRank}</p>
    </div>
  );
}

export default App;
