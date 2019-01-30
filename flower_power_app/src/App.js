import React, { Component } from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/index.js';
import './App.css';
import { connect } from "react-redux";
import { getProducts, setSaveProduct, setNameProduct, deleteProduct, setNameAddProduct, saveProduct, setDescriptionAddProduct } from './Redux/Actions/products';
import { startEditProduct, finishEditProduct } from './Redux/Actions/ui';

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addCard = this.addCard.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.state = {
      name: 'Alex',
      title: 'Super Alex',
      setEditMode: false,
      dataById: {},
      openAddCard: false,
    }
  }

  componentDidMount(){
    this.props._getAllProducts();
  }
  componentDidUpdate(){
    console.log(this.state.setEditMode)
  }
  handleClick(id) {
    this.props._startEditProduct(id);
  }
  onNameChange(event){
    const name = event.target.value;
    this.props._setNameProduct(name);
  }
  deleteProduct(id) {
    this.props._deleteProduct(id) 
   }

  onSave() {
    this.props._setSaveProduct();
  }
  addCard(){
    this.setState({openAddCard:true})
  }
  nameChange(event){
    const name=event.target.value;
    this.props._setNameAddProduct(name);
  }
  saveCard(){
    this.props._saveProduct();
  }
  descriptionChange(event){
    const description = event.target.value;
    this.props._setDescriptionAddProduct(description);
  }
0
  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header />
      <button onClick={this.addCard} className="button-add">Add product</button>
      {this.state.openAddCard ? <AddCard nameChange={this.nameChange} saveCard={this.saveCard} descriptionChange={this.descriptionChange}/> : null}
      {
        this.props.ui.productEdit ? 
          <EditCard {...this.state.dataById} onNameChange={this.onNameChange} onSave={this.onSave} product={this.props.product}/> : 
          this.props.ui.showSpinner ? 
            <div className="loading-spinner"><div></div><div></div><div></div><div></div></div>
          : 
          <Content 
            name={this.state.name}
            handleClick={this.handleClick}
            allData={this.props.products}
            product={this.props.product}
            title={this.state.title}
            deleteProduct={this.deleteProduct}
            handleChangeTitle={()=> {}}
          />
      }
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
    _setSaveProduct: () => dispatch(setSaveProduct()),
    _setNameProduct: (name) => dispatch(setNameProduct(name)),
    _deleteProduct: (id) => dispatch(deleteProduct(id)),
    _setNameAddProduct: (id) => dispatch(setNameAddProduct(id)),
    _saveProduct: () => dispatch(saveProduct()),
    _setDescriptionAddProduct: (description) => dispatch(setDescriptionAddProduct(description)),
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
