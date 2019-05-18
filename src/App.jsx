import React from 'react';
import './App.css';
import Viewbar from './components/Viewbar';
import Keypad from './components/Keypad';
import Button from './components/Button';


class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: '',
      lastOp: '',
      history: []
    }
    this.sortClick = this.sortClick.bind(this);
    this.addOp = this.addOp.bind(this);
    this.equalFunc = this.equalFunc.bind(this);
  }

  sortClick = e => {
    const symbol = e.target.getAttribute('name');

    if (symbol === 'c') {
      if (this.state.lastOp === 'c') {
        if (window.confirm('This will erase all history. Are you sure?')) {
          this.setState({
            display: '',
            ops: [],
            lastOp: '',
            history: []
          });
        }
      } else {
        this.setState({
          display: '',
          lastOp: 'c',
        });
      }
    }
    else if (symbol === 'del') {
      let tempDisplay = this.state.display;
      this.setState({
        display: tempDisplay.slice(0, -1),
        lastOp: 'del'
      });
    }
    else if (symbol === 'q') {
      this.equalFunc(symbol);
    }
    else if (/\d/.test(symbol)) {
      this.setState({
        display: this.state.display + symbol,
        lastOp: symbol
      });
    }
    else if (symbol === '.') {
      if (this.state.display.indexOf('.') === -1) {
        this.setState({
          display: this.state.display + symbol,
          lastOp: symbol
        });
      }
    } else if (symbol !== this.state.lastOp) {
      switch (symbol) {
        case '+':
        case '-':
        case 'x':
        case '/':
          this.addOp(symbol);
          break;
        case 's':
          alert('SURPRISE');
          break;
        default:
          alert('symbol switch broke');
      }
    };
  }

  equalFunc(symbol) {
    return alert(`func equalFunc pass: ${symbol}`);
  };
  addOp(symbol) {
    return alert(`func addOp pass: ${symbol}`);
  };

  render() {
    return (
      <div className='Calc' >
        <h1>T Wizard</h1>
        <Viewbar display={this.state.display} />
        <Keypad>
          <div className='Row'>
            <Button name='c' label='c' className='Command' onClick={this.sortClick} />
            <Button name='del' label='del' className='Command' onClick={this.sortClick} />
            <Button name='q' label="=" className='Command' onClick={this.sortClick} />
          </div>

          <div className='Row'>
            <Button name='7' label='7' className='Num' onClick={this.sortClick} />
            <Button name='8' label='8' className='Num' onClick={this.sortClick} />
            <Button name='9' label='9' className='Num' onClick={this.sortClick} />
            <Button name='x' label='x' className='Op' onClick={this.sortClick} />
          </div>

          <div className='Row'>
            <Button name='4' label='4' className='Num' onClick={this.sortClick} />
            <Button name='5' label='5' className='Num' onClick={this.sortClick} />
            <Button name='6' label='6' className='Num' onClick={this.sortClick} />
            <Button name='/' label='&#247;' className='Op' onClick={this.sortClick} />
          </div>

          <div className='Row'>
            <Button name='1' label='1' className='Num' onClick={this.sortClick} />
            <Button name='2' label='2' className='Num' onClick={this.sortClick} />
            <Button name='3' label='3' className='Num' onClick={this.sortClick} />
            <Button name='+' label='+' className='Op' onClick={this.sortClick} />
          </div>

          <div className='Row'>
            <Button name='s' label='😶' className='Num' onClick={this.sortClick} />
            <Button name='0' label='0' className='Num' onClick={this.sortClick} />
            <Button name='.' label='.' className='Num' onClick={this.sortClick} />
            <Button name='-' label='-' className='Op' onClick={this.sortClick} />
          </div>
        </Keypad>
      </div>
    );
  }
}

export default Calc;
