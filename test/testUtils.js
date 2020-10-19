import checkPropTypes from "check-prop-types";
import rootReducer from "../src/reducers";
import { createStore,applyMiddleware } from "redux";
import {middlewares} from '../src/configureStore'

export const storeFactory = (initalState) => {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(rootReducer, initalState);
};

export const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test='${val}']`);
};

export const checkProps = (component, conformingProps) => {
  const propError = checkPropTypes(
    component.propTypes,
    conformingProps,
    "prop",
    component.name
  );
  expect(propError).toBeUndefined();
};
