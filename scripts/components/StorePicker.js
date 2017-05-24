import React, { Component } from 'react';
import reactMixin from 'react-mixin';
import { History } from 'react-router';
import autobind from 'autobind-decorator';
import h from '../helpers';

@autobind
class StorePicker extends Component {
  goToStore(e) {
    e.preventDefault();

    const storeId = this.refs.storeId.value;
    this.history.pushState(null, `/store/${storeId}`);
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={h.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
};

reactMixin.onClass(StorePicker, History);

export default StorePicker;
