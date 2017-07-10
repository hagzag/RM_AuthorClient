import "slim-js"
import "webco/components/t-stars"


import React from 'react';
import ReactDOM from 'react-dom';
import createReduxStore from './app/bootstrap/createReduxStore';
import routes from './routes';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';

const store = createReduxStore();

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
