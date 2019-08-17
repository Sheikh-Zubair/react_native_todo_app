/* eslint-disable no-undef */
import { applyMiddleware, compose, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import { createEpicMiddleware } from 'redux-observable';

// root reducer
import rootReducer from './reducer';

// epics
import { epics } from './epics';

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const epicMiddleware = createEpicMiddleware();

const logger = createLogger({
  collapsed: true,
});

const store = createStore(
  rootReducer,
  {},
  composeEnhancers(applyMiddleware(epicMiddleware, logger)),
);

epicMiddleware.run(epics);

export default store;
