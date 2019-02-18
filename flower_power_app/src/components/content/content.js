import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardProduct from '../card/card';
import './content.css';

class Content extends Component {
    render() {
        return(
          <div className="content">
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