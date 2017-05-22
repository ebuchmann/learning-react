const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const { Router, Route, History } = ReactRouter;
const createBrowserHistory = require('history/lib/createBrowserHistory');

const h = require('./helpers');

/**
 * App component
 */

const App = React.createClass({
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Really Fresh Seafood" />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
})

const Header = React.createClass({
  render: function() {
    return (
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>{this.props.tagline}</span>
        </h3>
      </header>
    )
  }
})
const Order = React.createClass({
  render: function() {
    return (
      <p>Order</p>
    )
  }
})
const Inventory = React.createClass({
  render: function() {
    return (
      <p>Inventory</p>
    )
  }
})

/**
 * StorePicker
 */

const StorePicker = React.createClass({
  mixins: [History],

  goToStore: function(e) {
    e.preventDefault();

    const storeId = this.refs.storeId.value;
    this.history.pushState(null, `/store/${storeId}`);
  },

  render: function() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
});

/**
 * Not found
 */

const NotFound = React.createClass({
  render: function() {
    return <h1>Not Found!</h1>
  }
});

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
