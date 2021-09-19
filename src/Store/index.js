import { createStore, compose, applyMiddleware } from "redux";
import thunk from 'redux-thunk';
import reducer from '../reducers';

function logger({ getState }) {
  return next => action => {
    // console.log('will dispatch', action)

    const returnValue = next(action)

    // console.log('state after dispatch', getState())

    return returnValue
  }
}


const composeEnhancers =
  typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(
  applyMiddleware(thunk, logger),
);
const store = createStore(reducer, enhancer);
export {
  store
}