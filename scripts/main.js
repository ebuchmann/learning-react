const React = require('react');
const ReactDOM = require('react-dom');

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
        <h1>Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
        Day</h1>
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
  render: function() {
    return (
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>
    )
  }
});

ReactDOM.render(
  <App />,
  document.querySelector('#main'),
);
