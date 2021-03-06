import axios from "axios";

import { getLetterMatchCount } from "../helpers";

export const actionTypes = {
  CORRECT_GUESS: "CORRECT_GUESS",
<<<<<<< HEAD
  GUESS_WORD: "GUESS_WORD",
  SET_SECRET_WORD: "SET_SECRET_WORD",
};

export const guessWord = (guessedWord) => {
  return function (dispatch, getState) {
    const secretWord = getState().secretWord;
    const letterMatchCount = getLetterMatchCount(guessedWord, secretWord);

    dispatch({
      type: actionTypes.GUESS_WORD,
      payload: { guessedWord, letterMatchCount },
    });
    if (guessedWord === secretWord) {
      dispatch({ type: actionTypes.CORRECT_GUESS });
    }
  };
};

export const getSecretWord = () => {
  return (dispatch) => {
    axios.get("http://localhost:3030");
  };
};
=======
};

export function correctGuess() {
  return {
    type: actionTypes.CORRECT_GUESS,
  };
}
>>>>>>> parent of 93dbc3e... redux-thunk
