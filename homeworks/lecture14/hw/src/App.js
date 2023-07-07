import React, { useState } from "react";
import Hw1 from "./homeworks/hw1";
import Hw2 from "./homeworks/hw2";
import Hw3 from "./homeworks/hw3";

function App() {
  const [page, setPage] = useState();

  const renderPage = () => {
    if (page === "1") return <Hw1 />;
    if (page === "2") return <Hw2 />;
    if (page === "3") return <Hw3 />;
  };

  return (
    <div className="App">
      <button onClick={() => setPage("1")}>Homework1</button>
      <button onClick={() => setPage("2")}>Homework2</button>
      <button onClick={() => setPage("3")}>Homework3</button>
      {renderPage()}
    </div>
  );
}

export default App;
