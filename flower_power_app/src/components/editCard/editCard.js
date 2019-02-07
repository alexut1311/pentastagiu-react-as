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
  render() {
    return (
      <div className="content-card modal">

        <List className={this.props.classes.root}>
          <ListItem>
            <ListItemText primary="Name"/>
            <TextField
                className={this.props.classes.textField}
                value={this.props.product.name}
                onChange={this.props.onNameChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary="Description"/>
              <TextField
                className={this.props.classes.textField}
                value={this.props.product.description}
                onChange={this.props.onDescriptionChange}
               />
          </ListItem>
          <Divider/>
          <ListItem>
            <ListItemText primary="Price"/>
            <TextField
                className={this.props.classes.textField}
                type="number"
                value={this.props.product.unitPrice}
                onChange={this.props.onPriceChange}
               />
          </ListItem>
          <Divider/>
         <ListItem>
           <ListItemText primary="Photo Url"/>
           <TextField
                className={this.props.classes.textField}
                value={this.props.product.photoUrl}
                onChange={this.props.onPhotoUrlChange}
               />
         </ListItem>
       </List>
        
        
        <Button variant="outlined" color="primary" onClick={this.props.onSave}>
           Save
        </Button>&nbsp;&nbsp;
        <Button variant="outlined" color="secondary" onClick={this.props.stopEditCard}>
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
export default withStyles(styles)(EditCard);

