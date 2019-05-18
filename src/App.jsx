import React from 'react';
import './App.css';
import Viewbar from './components/Viewbar';
import Keypad from './components/Keypad';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loadState: 'fresh',
      display: ''
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      loadState: 'in use',
    });
  }

  render() {
    return (
      <div className='Main FlexCol' >
        <h1>T Wizard</h1>
        <Viewbar display={this.state.display} />
        <Keypad mainClick={this.handleClick} />
      </div>
    );
  }

}

export default Calc;
