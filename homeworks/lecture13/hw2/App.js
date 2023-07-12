import React, { useState } from "react";
import "./PhoneScreen.css";

const PhoneScreen = () => {
  const [status, setStatus] = useState("");

  const handleButtonClick = (value) => {
    setStatus(`Button ${value} clicked`);
  };

  return (
    <div className="phone-screen">
      <div className="status-bar">{status}</div>
      <div className="middle-buttons">
        {Array.from({ length: 16 }).map((_, index) => (
          <button key={index} onClick={() => handleButtonClick(index + 1)}>
            App {index + 1}
          </button>
        ))}
      </div>
      <div className="bottom-buttons">
        {Array.from({ length: 4 }).map((_, index) => (
          <button key={index} onClick={() => handleButtonClick(index + 17)}>
            App {index + 17}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PhoneScreen;
