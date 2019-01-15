import React from 'react';
import PropTypes from 'prop-types';
import Card from '../card/card';
import './content.css';

class Content extends React.PureComponent {
    render() {
        const props = this.props;
        return(
          <div className="content">
                  {props.allData.map(function(item){
                    return <Card key={item.id} {...item} handleClick={props.handleClick}/>
                }, this)}
          </div>
        )
    }
}
Content.propTypes = {
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
}
export default Content;