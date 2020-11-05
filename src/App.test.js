import React from "react";
import { shallow } from "enzyme";
import { storeFactory } from "../test/testUtils";
import App from "./App";

const setup = (state = {}) => {
  const store = storeFactory(state);
  const wrapper = shallow(<App store={store} />)
    .dive()
    .dive();
  return wrapper;
};

test("has access to `secretWord` state", () => {
  //   const secretWord = "party";
  //   const wrapper = setup({ secretWord });
  //   const secretWordProp = wrapper.instance().props.secretWord;
  //   expect(secretWordProp).toBe(secretWord);
});

test("has access to `guessedWords` state", () => {
  //   const guessedWords = [{ giessedWord: "train", letterMatchCount: 3 }];
  //   const wrapper = setup({ guessedWords });
  //   const guessedWordsProp = wrapper.instance().props.guessedWords;
  //   expect(guessedWordsProp).toEqual(guessedWords);
});
test("`getSecretWord` action creator is a function on the props", () => {
  //   const wrapper = setup();
  //   const getSecretWordProp = wrapper.instance().props.getSecretWord;
  //   expect(getSecretWordProp).toBeInstanceOf(Function);
});
