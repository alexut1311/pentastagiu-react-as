import React, { Component } from 'react';
import Header from './components/header/header';
import Button from '@material-ui/core/Button';
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

const NotFound = (props) => (
  <h2>Page not found</h2>
);


class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addCard = this.addCard.bind(this);
    this.state = {
      dataById: {},
    }
  }

  componentDidMount(){
    this.props._getAllProducts();
  }
  handleClick(id) {
    this.props._startEditProduct(id);
    this.props.history.push(`/product/${id}`);
  }

  deleteProduct(id) {
    if (window.confirm('Are you sure you wish to delete this item?'))
    {this.props._deleteProduct(id) }
   }

  addCard(){
    this.props.history.push('/add-product');
  }

  saveCard(){
    this.props._saveProduct();
  }



  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header />
      <div className="button-add">
      <Button variant="outlined" onClick={this.addCard}>
      Add product
      </Button>
      </div>


      <Switch>

      <Route path="/add-product" component={(props) => (
        <AddCard history={this.props.history}/>
      )}/>

      <Route path="/product/:productId" component={(props) => (
        <EditCard 
        product={this.props.product} 
        history={this.props.history}/> 
      )}/>

      <Route exact path="/" component={() => (
        <Content 
        handleClick={this.handleClick}
        allData={this.props.products}
        product={this.props.product}
        deleteProduct={this.deleteProduct}
        handleChangeTitle={()=> {}} />
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