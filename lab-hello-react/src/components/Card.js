import React, {Component} from 'react';

class Card extends Component {
  render() {
    const {
      title,
      text,
      img,
   } = this.props;

    return (
      <div className="card">
        <img src={`/images/${img}`} alt=""/>
        <h3>{title}</h3>
        <p>{text}</p>
      </div>
    )
  }
}

export default Card;
