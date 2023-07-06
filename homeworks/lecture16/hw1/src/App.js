import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoPage from "./components/Native/TodoPage";
import TodoPageRTK from "./components/RTK/TodoPage";
import todoReducerNative from "./reducer/redux-native";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import todoReducerRTK from "./reducer/redux-rtk";

const storeRTK = configureStore({
  reducer: {
    todos: todoReducerRTK,
  },
});

const storeNative = createStore(todoReducerNative);

function App() {
  const [open, setOpen] = useState();
  return (
    <div>
      <div className="selection">
        <button onClick={() => setOpen("RTK")}>RTK</button>
        <button onClick={() => setOpen("Native")}>Native</button>
      </div>
      {open === "Native" ? (
        <Provider store={storeNative}>
          <Router>
            <Routes>
              <Route path="/" element={<TodoPage />} />
            </Routes>
          </Router>
        </Provider>
      ) : null}
      {open === "RTK" ? (
        <Provider store={storeRTK}>
          <Router>
            <Routes>
              <Route path="/" element={<TodoPageRTK />} />
            </Routes>
          </Router>
        </Provider>
      ) : null}
    </div>
  );
}

export default App;
