import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Component({ components, handleTextClick }) {
  const location = useLocation();
  const searchParmas = new URLSearchParams(location.search);
  const name = searchParmas.get("name");
  const color = searchParmas.get("color");
  const navigate = useNavigate();

  const [component, setComponent] = useState(null);

  useEffect(() => {
    for (let c of components) {
      if (c.name === name) {
        c.color = color?.length === 0 ? location.hash : color;
        setComponent(c);
      }
    }
  }, []);

  if (!component) return <h1>No such component</h1>;

  const handleChange = (component) => (e) => {
    if (e.key === "Enter") {
      console.log("redirect");
      handleTextClick(component, e.target.value);
      navigate(
        `/components/component?name=${component.name}&color=${component.color}`
      );
    }
  };

  return (
    <div className="component" style={{ backgroundColor: component.color }}>
      <label htmlFor={component.name}>{component.name}</label>
      <input
        type="text"
        id={component.name}
        placeholder={component.name}
        onKeyDown={handleChange(component)}
      />
    </div>
  );
}
