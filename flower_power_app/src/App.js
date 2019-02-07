import React, { Component } from 'react';
import Header from './components/header/header';
import Button from '@material-ui/core/Button';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import AddCard from './components/addCard/index.js';
import './App.css';
import { connect } from "react-redux";
import { getProducts, 
  setSaveProduct, 
  saveProduct,
  deleteProduct,
  setNameProduct, 
  setDescriptionProduct, 
  setPriceProduct, 
  setPhotoUrlProduct,
  setNameAddProduct, 
  setDescriptionAddProduct, 
  setPriceAddProduct, 
  setPhotoUrlAddProduct,
  resetProduct, 
   } from './Redux/Actions/products';
import { startEditProduct, finishEditProduct, startAddProduct, finishAddProduct } from './Redux/Actions/ui';


class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onSave = this.onSave.bind(this);
    this.deleteProduct = this.deleteProduct.bind(this);
    this.addCard = this.addCard.bind(this);
    this.saveCard = this.saveCard.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onPriceChange = this.onPriceChange.bind(this);
    this.onPhotoUrlChange = this.onPhotoUrlChange.bind(this);
    this.nameChange = this.nameChange.bind(this);
    this.descriptionChange = this.descriptionChange.bind(this);
    this.priceChange = this.priceChange.bind(this);
    this.photoUrlChange = this.photoUrlChange.bind(this);
    this.stopAddCard = this.stopAddCard.bind(this);
    this.stopEditCard = this.stopEditCard.bind(this);
    this.state = {
      name: 'Alex',
      title: 'Super Alex',
      setEditMode: false,
      dataById: {},
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
  onDescriptionChange(event){
    const name = event.target.value;
    this.props._setDescriptionProduct(name);
  }
  onPriceChange(event){
    const price = event.target.value;
    this.props._setPriceProduct(price);
  }
  onPhotoUrlChange(event){
    const photoUrl = event.target.value;
    this.props._setPhotoUrlProduct(photoUrl);
  }

  deleteProduct(id) {
    this.props._deleteProduct(id) 
   }

  onSave() {
    this.props._setSaveProduct();
  }
  addCard(){
    this.props._startAddProduct();
  }
  stopAddCard(){
    this.props._finishAddProduct();
    this.props._resetProduct();
  }
  nameChange(event){
    const name=event.target.value;
    this.props._setNameAddProduct(name);
  }
  stopEditCard(){
    this.props._finishEditProduct();
  }
  saveCard(){
    this.props._saveProduct();
  }
  descriptionChange(event){
    const description = event.target.value;
    this.props._setDescriptionAddProduct(description);
  }
  priceChange(event){
    const price = event.target.value;
    this.props._setPriceAddProduct(price);
  }
  photoUrlChange(event){
    const photoUrl = event.target.value;
    this.props._setPhotoUrlAddProduct(photoUrl);
  }



  render() {
    console.log(this.props)
    return (
      <div className="App">
      <Header />
      <div className="button-add">
      <Button variant="outlined" onClick={this.addCard} >
      Add product
      </Button>
      </div>
      {this.props.ui.productAdd ? 
      <AddCard nameChange={this.nameChange}
       descriptionChange={this.descriptionChange}
        priceChange={this.priceChange} 
        stopAddCard={this.stopAddCard}
        photoUrlChange={this.photoUrlChange} 
        saveCard={this.saveCard}
        /> 
        : 
        this.props.ui.productEdit ? 
        <EditCard {...this.state.dataById} 
        onNameChange={this.onNameChange} 
        onDescriptionChange={this.onDescriptionChange}
        onPriceChange={this.onPriceChange}
        onDescriptionChange={this.onDescriptionChange}
        onSave={this.onSave} 
        stopEditCard={this.stopEditCard}
        product={this.props.product}/> 
        : 
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
        />}
      
        
      
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
    _setSaveProduct: () => dispatch(setSaveProduct()),
    _saveProduct: () => dispatch(saveProduct()),
    _deleteProduct: (id) => dispatch(deleteProduct(id)),
    _setNameProduct: (name) => dispatch(setNameProduct(name)),
    _setDescriptionProduct: (description) => dispatch(setDescriptionProduct(description)),
    _setPriceProduct: (price) => dispatch(setPriceProduct(price)),
    _setPhotoUrlProduct: (photoUrl) => dispatch(setPhotoUrlProduct(photoUrl)),
    _setNameAddProduct: (id) => dispatch(setNameAddProduct(id)),
    _setDescriptionAddProduct: (description) => dispatch(setDescriptionAddProduct(description)),
    _setPriceAddProduct: (price) => dispatch(setPriceAddProduct(price)),
    _setPhotoUrlAddProduct: (photoUrl) => dispatch(setPhotoUrlAddProduct(photoUrl)),
  });


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);