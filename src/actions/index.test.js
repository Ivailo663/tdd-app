<<<<<<< HEAD
import moxios from "moxios";
import { storeFactory } from "../../test/testUtils";
import { getSecretWord } from "./";
describe("getSecretWord action creator", () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  test("adds response word to state", () => {
    const secretWord = "party";
    const store = storeFactory();

    moxios.wait(() => {
      const request = moxios.request.mostRecent();
      request.respondWith({
        status: 200,
        response: secretWord,
      });
    });
    return store.dispatch(getSecretWord()).then(() => {
      const newState = store.getState();
      expect(newState.secretWord).toBe(secretWord);
    });
=======
import { correctGuess, actionTypes } from "./index";

describe("correctGuess", () => {
  test("returns an action with type `CORRECT_GIESS`", () => {
    const action = correctGuess();
    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
>>>>>>> parent of 93dbc3e... redux-thunk
  });
});
