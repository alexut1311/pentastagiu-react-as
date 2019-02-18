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
          <Button variant="contained" color="secondary" onClick={() =>props.deleteProduct(id)} className={this.props.classes.button}>
            Delete
            <DeleteIcon/>
          </Button>
              Delete
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
export default withStyles(styles)(CardProduct);