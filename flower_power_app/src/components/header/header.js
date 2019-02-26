import React from 'react';
import './header.css';
import { Random } from 'react-animated-text';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { withStyles } from '@material-ui/core/styles';
import Icon from '@material-ui/icons/ShoppingCart';

const styles = theme => ({
  badge: {
    top: '50%',
    right: '2%',
    
    // The border color match the background color.
    
  },
});



class Header extends React.PureComponent {

  onShoppingCardPress = () => {
    this.props.history.push('/shopping-cart');
  }
  
  render(){
  
    return(
        <header className="App-header">
          <div className="logo-text">
          <Random text="Flower power app"/>
          </div>
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
