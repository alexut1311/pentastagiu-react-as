import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TextField from '@material-ui/core/TextField';
import "./editCard.css";
import { connect } from "react-redux";
import { setNameProduct, setDescriptionProduct, setPriceProduct, setPhotoUrlProduct, setSaveProduct, resetProduct } from "../../Redux/Actions/products";


const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});




class EditCard extends PureComponent {
  constructor(props){
    super(props);
    this.state = {
      dataById: {},
    }
  }
  onNameChange = (event) => {
    const name = event.target.value;
    this.props._setNameProduct(name);
  }

  onDescriptionChange = (event) => {
    const name = event.target.value;
    this.props._setDescriptionProduct(name);
  }

  onPriceChange = (event) => {
    const price = event.target.value;
    this.props._setPriceProduct(price);
  }

  onPhotoUrlChange = (event) => {
    const photoUrl = event.target.value;
    this.props._setPhotoUrlProduct(photoUrl);
  }

  onSave = () => {
    this.props._setSaveProduct();
    this.props.history.push('/');
  }

  onExit = () => {
    this.props._resetProduct();
    this.props.history.push('/');
  }



  render() {
    return (
      <div className="content-card modal">
        <List className={this.props.classes.root}>
          <ListItem>
            <ListItemText primary="Name"/>
            <TextField
                name="name"
                className={this.props.classes.textField}
                value={this.props.product.name}
                onChange={this.onNameChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary="Description"/>
              <TextField
                ref="textField"
                name="description"
                className={this.props.classes.textField}
                value={this.props.product.description}
                onChange={this.onDescriptionChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary="Price"/>
            <TextField
                name="unitPrice"
                className={this.props.classes.textField}
                type="number"
                value={this.props.product.unitPrice}
                onChange={this.onPriceChange}
               />
          </ListItem>
          <Divider/>
         <ListItem>
           <ListItemText primary="Photo Url"/>
           <TextField
                name="photoUrl"
                className={this.props.classes.textField}
                value={this.props.product.photoUrl}
                onChange={this.onPhotoUrlChange}
               />
         </ListItem>
       </List>
        
        
        <Button variant="outlined" color="primary" onClick={this.onSave}>
           Save
        </Button>&nbsp;&nbsp;
      
        <Button variant="outlined" color="secondary" onClick={this.onExit}>
            Exit edit product
          </Button>
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

const mapStateToProps = (state) => ({
  product: state.products.product
});
  
const mapDispatchToProps = (dispatch) => ({
    _setNameProduct: (name) => dispatch(setNameProduct(name)),
    _setDescriptionProduct: (description) => dispatch(setDescriptionProduct(description)),
    _setPriceProduct: (price) => dispatch(setPriceProduct(price)),
    _setPhotoUrlProduct: (photoUrl) => dispatch(setPhotoUrlProduct(photoUrl)),
    _setSaveProduct: () => dispatch(setSaveProduct()),
    _resetProduct:() => dispatch(resetProduct()),
  });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(EditCard));


