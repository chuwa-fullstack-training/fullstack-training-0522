import React, { useState } from "react";
import "./App.css";

function PhoneScreen() {
  const [currentButton, setCurrentButton] = useState();
  const handleClick = (num) => {
    setCurrentButton(num);
  };

  const buttons = Array.from({ length: 20 }, (_, i) => i + 1);

  return (
    <div className="phone-screen">
      <div className="status-bar">
        {currentButton ? `Button ${currentButton} is clicked!` : "Staus Bar."}
      </div>
      <div className="button">
        {buttons.map((number) => (
          <button key={number} onClick={() => handleClick(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PhoneScreen;
