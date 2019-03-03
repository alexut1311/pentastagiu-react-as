import React from 'react';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import './card.css';
import CardActions from '@material-ui/core/CardActions';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from "react-redux";
import { deleteProduct } from '../../Redux/Actions/products';

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    button: {
      margin: theme.spacing.unit,
    },
    input: {
      display: 'none',
    },

  });


class CardProduct extends React.PureComponent {
  state = {
    open: false,
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteProduct = (id) => {
    this.props._deleteProduct(id) 
  };

    render() {
        const props = this.props;
        console.log('render Card', props.id);
        const id= props.id;
        return (
            <div className="content-card">
        <Card>
        <Typography gutterBottom variant="h3">
           {props.name}
          </Typography>
        <CardMedia
          className={this.props.classes.media}
          title="Paella dish"
          image={props.photoUrl}
        />
        <CardContent>
         <Typography component="p">
          {props.description}
         </Typography>
         <Typography gutterBottom variant="h5" component="h2">
          Price: {props.unitPrice} EUR
         </Typography>
        </CardContent>
        <CardActions>

          <Button variant="contained" color="primary" className={this.props.classes.button}>
            Add to cart
          </Button>
          <Button variant="contained" color="primary" onClick={() =>props.handleClick(id)} className={this.props.classes.button}>
            Edit<EditIcon/>
          </Button>
          <Button variant="contained" color="secondary" onClick={this.handleClickOpen}>
          Delete <DeleteIcon/>
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete this product?"}</DialogTitle>
          <DialogContent>
          <DialogContentText id="alert-dialog-description">This action can not be undone !</DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button variant="outlined" color="primary" onClick={() =>this.deleteProduct(id)}>
              Agree
          </Button>
          <Button variant="outlined" color="secondary" onClick={this.handleClose}>
              Disagree
          </Button>
          </DialogActions>
        </Dialog>
        
        </CardActions>
      </Card>
              </div>
        )
    }
}
CardProduct.propTypes={
    name: PropTypes.string,
    handleClick: PropTypes.func,
    deleteProduct: PropTypes.func,
}
const mapStateToProps = () => ({
  
});
const mapDispatchToProps = (dispatch) => ({
   _deleteProduct: (id) => dispatch(deleteProduct(id)),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(CardProduct));
