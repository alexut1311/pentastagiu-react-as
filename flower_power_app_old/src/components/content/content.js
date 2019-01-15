import React, {
    Component
} from 'react';
import Card from '../card/card.js';
import PropTypes from 'prop-types';
import Input from '../input/input.js'
import './content.css';

class Content extends Component {
    render(){
        console.log(this.props)
        const callback = function(item){
            return <Card key={item.id} name={item.name} handleClick={this.props.handleClick}/>
        }
        return(
            <div className="content">
            <Input title={this.props.title} handleChangeTitle={this.props.handleChangeTitle}/>
          <Card name={this.props.name} handleClick={this.props.handleClick}/>
          {this.props.allData.map(callback,this)}
        </div>


        )
    }
}

Content.propTypes={
    name: PropTypes.string.isRequired,
    handleClick: PropTypes.func,
    handleChangeTitle: PropTypes.func,
    title: PropTypes.string,
}

export default Content;