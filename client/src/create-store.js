import { createStore, combineReducers, applyMiddleware } from 'redux';
import promiseMiddleware from './promise-middleware';
import * as reducers from './reducers';

export default (data) => {
  const reducer = combineReducers(reducers);
  const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);
  const store = finalCreateStore(reducer, data, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  return store;
}
