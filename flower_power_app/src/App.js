import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/index.js';
import './App.css';
import { connect } from "react-redux";
import { getProducts, 
  deleteProduct,
  resetProduct, 
   } from './Redux/Actions/products';
import { startEditProduct, finishEditProduct, startAddProduct, finishAddProduct } from './Redux/Actions/ui';
import { Route , Switch } from "react-router-dom";

const NotFound = () => (
  <h2 className="simple-page">Page not found</h2>
);
const ShoppingCart = () => (
  <h2 className="simple-page">Shopping Cart</h2>
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

  handleClick = (id) => {
    this.props._startEditProduct(id);
    this.props.history.push(`/product/${id}`);
  }

  deleteProduct = (id) => {
    if (window.confirm('Are you sure you wish to delete this item?'))
    {this.props._deleteProduct(id) }
   }

  addCard = () => {
    this.props.history.push('/add-product');
  }


  

  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header history={this.props.history} orderCount={this.props.ui.shoppingCart.length}/>

      <Switch>
      
      <Route path="/shopping-cart" component={ShoppingCart} />

      <Route path="/add-product" component={(props) => (
        <AddCard {...props}/>
      )}/>

      <Route path="/product/:productId" component={(props) => (
        <EditCard 
        {...props}
        product={this.props.product}/> 
      )}/>

      <Route exact path="/" component={() => (
        
        <Content 
        addCard={this.addCard}
        handleClick={this.handleClick}
        allData={this.props.products}
        product={this.props.product}
        deleteProduct={this.deleteProduct}
         />
      )}/>

      <Route path="*" component={NotFound}/>

      </Switch>
      
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  products: state.products.products,
  ui: state.ui,
  product: state.products.product,
});
  
const mapDispatchToProps = (dispatch) => ({
    _getAllProducts: () => dispatch(getProducts()),
    _startEditProduct: (id) => dispatch(startEditProduct(id)),
    _finishEditProduct: () => dispatch(finishEditProduct()),
    _startAddProduct:() => dispatch(startAddProduct()),
    _finishAddProduct:() => dispatch(finishAddProduct()),
    _resetProduct:() => dispatch(resetProduct()),
    _deleteProduct: (id) => dispatch(deleteProduct(id)),
    
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);