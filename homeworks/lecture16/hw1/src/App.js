import React, { useState } from "react";
import PlainRedux from "./plain-redux";
import Toolkit from "./redux-toolkit";

function App() {
  const [page, setPage] = useState();

  const renderPage = () => {
    if (page === "PlainRedux") return <PlainRedux />;
    if (page === "Toolkit") return <Toolkit />;
  };

  return (
    <div className="App">
      <button onClick={() => setPage("PlainRedux")}>PlainRedux</button>
      <button onClick={() => setPage("Toolkit")}>Toolkit</button>
      {renderPage()}
    </div>
  );
}

export default App;
