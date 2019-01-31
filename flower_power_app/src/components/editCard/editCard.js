import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import "./editCard.css";

class EditCard extends PureComponent {
  render() {
    return (
      <div className="content-card modal">
        <label>Name</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          value={this.props.product.name}
          name="name"
          type="text"
          onChange={this.props.onNameChange}
        /><div></div>
        <label>Description</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          value={this.props.product.description}
          name="description"
          type="text"
          onChange={this.props.onDescriptionChange}
        /><div></div>
        <label>Price</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          value={this.props.product.unitPrice}
          name="name"
          type="number"
          pattern="[0-9]"
          onChange={this.props.onPriceChange}
        /><div></div>
        <label>Photo Url</label>&nbsp;&nbsp;&nbsp;&nbsp;
        <input
          value={this.props.product.photoUrl}
          name="name"
          type="text"
          onChange={this.props.onPhotoUrlChange}
        /><div></div>
        <button onClick={this.props.onSave}>Save</button>
      </div>
    );
  }
}
EditCard.propTypes = {
  name: PropTypes.string,
  onNameChange: PropTypes.func,
  onDescriptionChange: PropTypes.func,
  onPriceChange: PropTypes.func,
  onPhotoUrlChange: PropTypes.func,
};
export default EditCard;
