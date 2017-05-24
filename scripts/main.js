const React = require('react');
const ReactDOM = require('react-dom');
const CSSTransitionGroup = require('react-addons-css-transition-group');
const ReactRouter = require('react-router');
const { Router, Route, History } = ReactRouter;
const createBrowserHistory = require('history/lib/createBrowserHistory');

const h = require('./helpers');

import App from './components/App';
import StorePicker from './components/StorePicker';
import NotFound from './components/NotFound';

/**
 * Routes
 */

const routes = (
  <Router history={createBrowserHistory()} >
    <Route path="/" component={StorePicker} />
    <Route path="/store/:storeId" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
);

ReactDOM.render(
  routes,
  document.querySelector('#main'),
);
