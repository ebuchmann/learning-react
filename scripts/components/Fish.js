import React, { Component } from 'react';
import autobind from 'autobind-decorator';
import h from '../helpers';

@autobind
class Fish extends Component {
  onButtonClick() {
    this.props.addToOrder(this.props.index);
  }

  render() {
    const details = this.props.details;
    const isAvailable = details.status === 'available';
    const buttonText = isAvailable ? 'Add to Order' : 'Sold Out!';

    return (
      <li className="menu-fish">
        <img src={details.image} alt={details.name} />
        <h3 className="fish-name">
          {details.name}
          <span className="price">{h.formatPrice(details.price)}</span>
        </h3>
        <p>{details.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick}>{buttonText}</button>
      </li>
    );
  }
}

export default Fish;
