import React from 'react';
import './hw2.css'; 

const PhoneKeypad = () => {
  const buttons = Array.from({ length: 20 }, (_, i) => i + 1); // Create an array of numbers from 1 to 20

  return (
    <div className="phone-keypad">
      {buttons.map((number) => (
        <button key={number} className="phone-keypad-button" onClick={() => alert(`Button ${number} clicked!`)}>
          {number}
        </button>
      ))}
    </div>
  );
};

export default PhoneKeypad;
