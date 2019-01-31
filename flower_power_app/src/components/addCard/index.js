import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./addCard.css";

class AddCard extends PureComponent {
  render() {
    return (
      <div className="content-card modal">
        <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          name="name"
          type="text"
          onChange={this.props.nameChange}
        /><div></div>
        <label>Description</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          name="description"
          type="text"
          onChange={this.props.descriptionChange}
        /><div></div>
        <label>Price</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          name="name"
          type="number"
          pattern="[0-9]"
          onChange={this.props.priceChange}
        /><div></div>
        <label>Photo Url</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          name="name"
          type="text"
          onChange={this.props.photoUrlChange}
        /><div></div>
        <button onClick={this.props.saveCard}>Save</button>
        
      </div>
    );
  }
}
AddCard.propTypes = {
  name: PropTypes.string,
  nameChange: PropTypes.func,
  descriptionChange: PropTypes.func,
  priceChange: PropTypes.func,
  photoUrlChange: PropTypes.func,
};
export default AddCard;
