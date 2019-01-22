import React, {
  Component
} from 'react';
import Header from './components/header/header';
import Content from './components/content/content';
import EditCard from './components/editCard/editCard';
import './App.css';
import {
  connect
} from "react-redux";
import { showLoader, hideLoader, openEditMode, closeEditMode } from './Redux/Actions/ui.js'

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onSave = this.onSave.bind(this);
    this.state = {
      name: 'Bogdan',
      allData: [],
      title: 'Super Bogdan',
      dataById: {}
    }
  }

  componentDidMount = async () => {
    const response = await fetch('/products');
    const data = await response.json();
    this.setState({
      allData: data
    });
  }
  componentDidUpdate() {
    console.log(this.state.setEditMode)
  }
  handleClick(id) {
    this.setState((prevState) => {
      let data = prevState.allData.find((item) => item.id === id);
      this.props._startEditMode()
      return {
        dataById: data || {},
      }
    });
  }
  onNameChange(event) {
    const name = event.target.name;
    const val = event.target.value;

    console.log(this.state.dataById[name]);

    this.setState(prevState => {
      prevState.dataById[name] = val;
      return prevState;
    });
  }

  onSave() {
    this.props._startSave();
    this.props._stopEditMode();
  }

  render() {
    return (
      <div className="App">
      <Header />
      {
        this.props.ui.setEditMode ? 
          <EditCard {...this.state.dataById} onNameChange={this.onNameChange} onSave={this.onSave}/> : 
          <Content 
            name={this.state.name} 
            handleClick={this.handleClick} 
            allData={this.state.allData} 
            title={this.state.title}
            handleChangeTitle={()=> {}}
          />
      }
      </div>
  );
  }
}

const mapStateToProps = (state) => state;

const mapDispatchToProps = (dispatch) => ({
  _startSave: () => dispatch(showLoader()),
  _stopSave: () => dispatch(hideLoader()),
  _startEditMode: () => dispatch(openEditMode()),
  _stopEditMode: () => dispatch(closeEditMode())

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);