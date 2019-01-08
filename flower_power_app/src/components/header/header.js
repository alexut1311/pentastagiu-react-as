import React, {
    Component
} from 'react';
import './header.css';
import UserInfo from './userinfo.js'
//import logo from '../../logo.svg';

/* class Header extends Component {
    render(){
        return(
            <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        )
    }
} */
class Header extends Component {
  render(){
      return(


<UserInfo
        isLoggedIn={this.props.isLoggedIn}
        buttonHandler={this.props.buttonHandler}
      />
      )
    }
  }  


export default Header;