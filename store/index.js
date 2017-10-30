import { createStore, applyMiddleware } from "redux";
import reducer from './reducers';
import thunk from 'redux-thunk';

const makeStore = (initialState, options) => {
  return createStore(reducer, initialState, applyMiddleware(thunk));
};

export default makeStore;