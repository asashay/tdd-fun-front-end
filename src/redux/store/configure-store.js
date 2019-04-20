import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from '../reducers';
import sagas from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const enhancers = [];
const middleware = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

export const configureStore = (initialState = {}) => {
  const store = createStore(rootReducer, initialState, composedEnhancers);
  sagaMiddleware.run(sagas);
  return store;
};
