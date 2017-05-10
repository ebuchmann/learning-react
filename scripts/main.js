const React = require('react');
const ReactDOM = require('react-dom');

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
  <StorePicker />,
  document.querySelector('#main'),
);
