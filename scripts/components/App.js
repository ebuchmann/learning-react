import React, { Component } from 'react';
import Inventory from './Inventory';
import Order from './Order';
import Header from './Header';
import Fish from './Fish';
import { LinkedStateMixin } from 'react-catalyst';
import reactMixin from 'react-mixin';
import autobind from 'autobind-decorator';

// Firebase
const Rebase = require('re-base');
const base = Rebase.createClass('https://catch-of-the-day-28e34.firebaseio.com/');

@autobind
class App extends Component {
  constructor() {
    super();

    this.state = {
      fishes: {},
      order: {},
    }
  }

  componentDidMount() {
    base.syncState(`${this.props.params.storeId}/fishes`, {
      context: this,
      state: 'fishes',
    });

    const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);

    if(localStorageRef) {
      this.setState({
        order: JSON.parse(localStorageRef)
      });
    }
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
  }

  addFish(fish) {
    const timestamp = Date.now();
    this.state.fishes[`fish-${timestamp}`] = fish;
    this.setState({ fishes: this.state.fishes });
  }

  removeFish(key) {
    this.state.fishes[key] = null;
    this.setState({ fishes: this.state.fishes });
  }

  loadSamples() {
    this.setState({
      fishes: require('../sample-fishes'),
    });
  }

  renderFish(key) {
    return (
      <Fish key={key} index={key} details={this.state.fishes[key]} addToOrder={this.addToOrder} />
    )
  }

  addToOrder(key) {
    this.state.order[key] = this.state.order[key] + 1 || 1;
    this.setState({ order: this.state.order });
  }

  removeFromOrder(key) {
    delete this.state.order[key];
    this.setState({ order: this.state.order });
  }

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Really Fresh Seafood" />
          <ul className="list-of-fishes">
            {Object.keys(this.state.fishes).map(this.renderFish)}
          </ul>
        </div>
        <Order fishes={this.state.fishes} order={this.state.order} removeFromOrder={this.removeFromOrder} />
        <Inventory addFish={this.addFish} removeFish={this.removeFish} loadSamples={this.loadSamples} fishes={this.state.fishes} linkState={this.linkState.bind(this)} />
      </div>
    )
  }
}

reactMixin.onClass(App, LinkedStateMixin);

export default App;
