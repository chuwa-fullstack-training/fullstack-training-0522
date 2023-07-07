import "./styles.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";

import Components from "./components/components";
import Component from "./components/component";

function App() {
  const [components, setComponents] = useState(
    JSON.parse(localStorage.getItem("components")) || [
      { name: "first", color: "initial" },
      { name: "second", color: "initial" },
      { name: "third", color: "initial" },
      { name: "fourth", color: "initial" },
      { name: "fifth", color: "initial" },
      { name: "sixth", color: "initial" }
    ]
  );

  const handleTextClick = (component, text) => {
    const newComponents = [...components];
    const idx = newComponents.indexOf(component);
    newComponents[idx].name = text;
    setComponents(newComponents);
  };

  useEffect(() => {
    localStorage.setItem("components", JSON.stringify(components));
  }, [components]);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route
              path="/components"
              element={
                <Components
                  components={components}
                  handleTextClick={handleTextClick}
                />
              }
            />
            {/* /components/component?name=&color= */}
            <Route
              path="/components/component"
              element={
                <Component
                  components={components}
                  handleTextClick={handleTextClick}
                />
              }
            />
          </Route>
          <Route path="*" element={<h1>404 Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <h1>Color Components</h1>
      <Outlet />
    </div>
  );
}

export default App;
