import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Congrats";

function App() {
  return (
    <div className="App" data-test="component-app">
      <Congrats />
    </div>
  );
}

export default App;
