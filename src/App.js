import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
class App extends Component {
  render() {
    return (
      <div className="App" data-test="component-app">
        <h1>Jotto</h1>
        <Congrats success={true} />
        <GuessedWords guessedWords={[]} />
        <Input />
      </div>
    );
  }
}

export default App;
