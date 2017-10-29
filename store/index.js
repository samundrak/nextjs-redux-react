import { createStore } from "redux";
import reducer from './reducers';

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};

export default makeStore;