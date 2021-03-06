import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/addCard.js';
import NotFound from './components/notFound/notFound.js'
import './App.css';
import { connect } from "react-redux";
import { getProducts } from './Redux/Actions/products';
import { Route , Switch } from "react-router-dom";


const ShoppingCart = () => (
  <h2 className="simple-page">Future Shopping Cart</h2>
)

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      dataById: {},
    }
  }

  componentDidMount(){
    this.props._getAllProducts();
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">

      <Header history={this.props.history} orderCount={this.props.ui.shoppingCart.length}/>

      <Switch>
      
      <Route path="/shopping-cart" component={ShoppingCart} />
      <Route path="/add-product" component={AddCard}/>
      <Route path="/product/:productId" component={(props)=>(<EditCard {...props}/>)}/>
      <Route exact path="/" component={Content}/>
      <Route path="*" component={NotFound}/>

      </Switch>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ui: state.ui,
});
  
const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts()),
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);