import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Switch } from 'react-router-dom';
import WebFont from 'webfontloader';
import { throttle } from 'lodash';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import { configureStore, loadState, saveState } from './redux/store';
import { history } from './utils';

import App from './containers/app';
import Yoda from './containers/yoda';
import Pirate from './containers/pirate';
import * as serviceWorker from './serviceWorker';

WebFont.load({ google: { families: ['Roboto:300,400,500,600,700'] } });

const initialState = loadState();
const store = configureStore(initialState);

const throttled = () => saveState(store.getState());
store.subscribe(throttle(throttled, 1000));

ReactDOM.render(  <Provider store={store}>
  <Router history={history}>
    <App>
      <Switch>
        {/* <ProtectedRoute exact path="/shop/users/:userId" component={User} /> */}
        <Route exact path="/yoda" component={Yoda} />
        <Route exact path="/pirate" component={Pirate} />
        {/* <Route component={NotFoundRoute} /> */}
      </Switch>
    </App>
  </Router>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
