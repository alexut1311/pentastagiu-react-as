import React, { PureComponent } from "react";
import { connect } from "react-redux";
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import "./addCard.css";
import { saveProduct } from "../../Redux/Middleware/products";
import { resetProduct } from "../../Redux/Actions/products";


class AddCard extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      description: '',
      unitPrice: '',
      photoUrl: '',
    };
  }
  
  onSubmit = (e) => {
    e.preventDefault();
    const newProduct = this.state;
    this.props._saveProduct(newProduct);
    this.props.history.push('/');
  }

  onExit = () => {
    this.props._resetProduct();
    this.props.history.push('/');
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }  


  render() {
    return (
      
      <div className="content-card modal">
        <List>
          <ListItem>
            <TextField
                name="name"
                style={{ width: 300 }}
                label="Name"
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
              <TextField
                name="description"
                style={{ width: 300 }}
                label="Description"
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <TextField
                name="unitPrice"
                style={{ width: 300 }}
                label="Price"
                type="number"
                onChange={this.onChange}
               />
          </ListItem>
          <Divider/>
         <ListItem>
           <TextField
                name="photoUrl"
                style={{ width: 300 }}
                label="Photo Url"
                onChange={this.onChange}
               />
         </ListItem>
       </List>

        <Button variant="outlined" color="primary" onClick={this.onSubmit}>
           Save
        </Button>&nbsp;&nbsp;
        
          <Button variant="outlined" color="secondary" onClick={this.onExit}>
            Exit add product
          </Button>

        
      </div>
    );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  _saveProduct: (product) => dispatch(saveProduct(product)) ,
  _resetProduct:() => dispatch(resetProduct()),
})

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(AddCard);
