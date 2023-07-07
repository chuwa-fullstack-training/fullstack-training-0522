import React from "react";

export default function Components({ components, handleTextClick }) {
  const handleEnter = (component) => (e) => {
    if (e.key === "Enter") {
      return handleTextClick(component, e.target.value);
    }
  };

  return (
    <>
      <h1>Components</h1>
      <div className="components">
        {components.map((component) => (
          <div
            key={component.name}
            className="component"
            style={{ backgroundColor: component.color }}
          >
            <label htmlFor={component.name}>{component.name}</label>
            <input
              type="text"
              id={component.name}
              placeholder={component.name}
              onKeyDown={handleEnter(component)}
            />
          </div>
        ))}
      </div>
    </>
  );
}
