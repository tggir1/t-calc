import React from 'react';
import './App.css';
import Viewbar from './components/Viewbar';
import Keypad from './components/Keypad';
import Button from './components/Button';

class Calc extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullInput: '',
      cQuence: '',
      decCount: 0,
      history: [],
      n1: null,
      n2: null,
      op: null
    }
    this.sortClick = this.sortClick.bind(this);
    this.handleOp = this.handleOp.bind(this);
    this.handleEq = this.handleEq.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.handleDec = this.handleDec.bind(this);
    this.handleDel = this.handleDel.bind(this);
  }

  sortClick = e => {
    const symbol = e.target.getAttribute('name');
    if (/[0-9]/.test(symbol)) {
      if (this.state.cQuence === 'c') {
        this.setState({
          cQuence: 'Num'
        })
      }
      this.setState({
        fullInput: this.state.fullInput + symbol
      });
    } else {
      switch (symbol) {
        case 'del':
          this.handleDel(symbol);
          break;
        case 'c':
          this.handleClear();
          break;
        case 'q':
          this.handleEq();
          break;
        case '+':
        case '-':
        case 'x':
        case '/':
          this.handleOp(symbol);
          break;
        case '.':
          this.handleDec();
          break;
        case 's':
          alert('SURPRISE');
          break;
        default:
          alert('shit broke');
      };
    }
  }
  handleDel = () => {
    if (this.state.fullInput[this.state.fullInput.length - 1] === '.') {
      this.setState({
        decCount: this.state.decCount - 1,
        fullInput: this.state.fullInput.slice(0, -1),
        cQuence: 'del'
      });
    } else if (this.state.fullInput[this.state.fullInput.length - 1] === ' ') {
      this.setState({
        fullInput: this.state.fullInput.slice(0, -3),
        cQuence: 'del'
      });
    } else {
      this.setState({
        fullInput: this.state.fullInput.slice(0, -1),
        cQuence: 'del'
      });
    }
  }
  handleClear = () => {
    if (this.state.cQuence === 'c') {
      if (window.confirm('This will erase all history. Are you sure?')) {
        this.setState({
          fullInput: '',
          cQuence: '',
          history: [],
          n1: null,
          n2: null,
          op: null
        });
      }
    } else {
      this.setState({
        fullInput: '',
        cQuence: 'c'
      });
    }
  }
  handleDec() {
    if (this.state.fullInput.indexOf('.') === -1) {
      this.setState({
        fullInput: this.state.fullInput + '.',
        cQuence: '.',
        decCount: 1
      });
    } else if ((this.state.fullInput.indexOf('.') < this.state.fullInput.indexOf(this.state.cQuence)) && this.state.decCount === 1) {
      this.setState({
        fullInput: this.state.fullInput + '.',
        cQuence: '.',
        decCount: 2
      });
    }
  }
  handleOp(symbol) {
    if (!/x|-|\/|\+/g.test(this.state.fullInput)) {
      this.setState({
        fullInput: this.state.fullInput + ' ' + symbol + ' ',
        cQuence: symbol,
      });
    }
  };
  splitInput() {
    return 'fuc'
  }
  handleEq = () => {
    const oppyFunc = {
      '+': (x, y) => x + y,
      '-': (x, y) => x - y,
      'x': (x, y) => x * y,
      '/': (x, y) => x / y
    };
    this.splitInput();
    const result = [this.state.n1, this.state.n2].reduce(oppyFunc[this.state.op]);
    let makeHistory = [...this.state.history, ...result]
    this.setState({
      fullInput: result,
      cQuence: '',
      history: [...makeHistory],
      n1: null,
      n2: null,
      op: null
    });
  };

  render() {
    return (
      <div className='Calc' >
        <h1>T Wizard</h1>
        <Viewbar display={this.state.fullInput} />
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
