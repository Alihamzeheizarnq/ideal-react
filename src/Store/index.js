import { createStore , compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from '../reducers';

function logger({ getState }) {
  return next => action => {
    console.log('will dispatch', action)

    const returnValue = next(action)

    console.log('state after dispatch', getState())

    return returnValue
  }
}
let ComposeRedux = window.__REDUX_DEVTOOLS_EXTENSION__  || compose;
let store = createStore(reducer ,[], applyMiddleware(thunk, logger));

export {
    store
}