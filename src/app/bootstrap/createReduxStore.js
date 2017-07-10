import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from '../store/index.reducers';

const middlewares = [
  thunkMiddleware,
];
const createReduxStore = (initialState, client) =>
  createStore(
    combineReducers({...reducers}),
    compose(
      applyMiddleware(
        ...middlewares
      ),
      window.devToolsExtension ? window.devToolsExtension() : f => f
    )
  );

export default createReduxStore;