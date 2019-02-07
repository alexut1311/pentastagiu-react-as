import React from 'react';
import './header.css';
import { Random } from 'react-animated-text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/fontawesome-free-solid';

class Header extends React.PureComponent {
render(){
    console.log('render Header');
    return(
        <header className="App-header">
          
          <div className="logo-text">
          <Random text="Flower power app" />
          </div>
          <FontAwesomeIcon icon={faShoppingCart} className="shopping-cart"/>
        
        </header>
    )
}
}
export default Header;
