import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import Congrats from "./Congrats";
import GuessedWords from "./GuessedWords";
import Input from "./Input";
import { getSecretWord } from "./actions";
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
const mapStateToProps = (state) => {
  const { success, guessedWords, secretWord } = state;
  return { success, guessedWords, secretWord };
};
export default connect(mapStateToProps, { getSecretWord })(App);
