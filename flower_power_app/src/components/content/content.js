import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../card/card';
import Button from '@material-ui/core/Button';
import './content.css';

class Content extends Component {
    render() {
        return(
          <div className="content">
          <div className="button-add">
            <Button variant="outlined" onClick={this.props.addCard}>
                Add product
            </Button>
            </div>
              {this.props.allData.map(item =>
                      <CardProduct key={item.id} {...item} deleteProduct={this.props.deleteProduct} handleClick={this.props.handleClick} product={this.props.product}/>)}
          </div>
        )
    }
}
Content.propTypes = {
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    allData: PropTypes.array,
    product: PropTypes.any,
    deleteProduct: PropTypes.func,
}
export default Content;