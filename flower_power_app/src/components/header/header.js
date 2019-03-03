import React from 'react';
import './header.css';
import { Random } from 'react-animated-text';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/ShoppingCart';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const styles = () => ({
  badge: {
    top: '50%',
    right: '2%',
  },
  add: {
    width: '2%',
    height: '2%',
  },
});



class Header extends React.PureComponent {

  onShoppingCardPress = () => {
    this.props.history.push('/shopping-cart');
  }

  addCard = () => {
    this.props.history.push('/add-product');
  }

  render(){
  
    return(
        <header className="App-header">
          <div className="logo-text">
          <Random text="Flower power app"/>
          </div>
          <Fab aria-label="Add" onClick={this.addCard} className={this.props.classes.add }>
          <AddIcon/>
          </Fab>
           &nbsp;&nbsp;&nbsp;&nbsp;
          <IconButton aria-label="Cart" className={this.props.classes.badge }>
            <Badge badgeContent={this.props.orderCount} color="primary" className={this.props.classes.badge }>
             <Icon name="shopping_cart"  onClick={this.onShoppingCardPress} />
            </Badge>
          </IconButton>
        
        
        </header>
    )
}
}
export default withStyles(styles)(Header);
