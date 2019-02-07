import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
import "./addCard.css";

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
  },
  textField: {
    width: 300,
  },
});

class AddCard extends PureComponent {
  render() {
    return (
      
      <div className="content-card modal">
        <List className={this.props.classes.root}>
          <ListItem>
            <TextField
                className={this.props.classes.textField}
                label="Name"
                onChange={this.props.nameChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
              <TextField
                className={this.props.classes.textField}
                label="Description"
                onChange={this.props.descriptionChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <TextField
                className={this.props.classes.textField}
                label="Price"
                type="number"
                onChange={this.props.priceChange}
               />
          </ListItem>
          <Divider/>
         <ListItem>
           <TextField
                className={this.props.classes.textField}
                label="Photo Url"
                onChange={this.props.photoUrlChange}
               />
         </ListItem>
       </List>

        <Button variant="outlined" color="primary" onClick={this.props.saveCard}>
           Save
        </Button>&nbsp;&nbsp;
        <Button variant="outlined" color="secondary" onClick={this.props.stopAddCard}>
            Exit add product
        </Button>
        
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
export default withStyles(styles)(AddCard);
