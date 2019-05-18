import React, { Component } from 'react';

class Keypad extends Component {
  render() {
    return (
      <div className='Keypad FlexCol CalcContainer'>
        <div className='Row'>
          <button value='clear' className='Command TwoWide' onClick={this.props.mainClick} >clear</button>
          <button value='=' className='Command TwoWide' onClick={this.props.mainClick} >=</button>
        </div>
        <div className='Row'>
          <button value='7' className='Num' onClick={this.props.mainClick} >7</button>
          <button value='8' className='Num' onClick={this.props.mainClick} >8</button>
          <button value='9' className='Num' onClick={this.props.mainClick} >9</button>
          <button value='&#247;' className='Op' onClick={this.props.mainClick} >&#247;</button>
        </div>
        <div className='Row'>
          <button value='4' className='Num' onClick={this.props.mainClick} >4</button>
          <button value='5' className='Num' onClick={this.props.mainClick} >5</button>
          <button value='6' className='Num' onClick={this.props.mainClick} >6</button>
          <button value='x' className='Op' onClick={this.props.mainClick} >x</button>
        </div>
        <div className='Row'>
          <button value='1' className='Num' onClick={this.props.mainClick} >1</button>
          <button value='2' className='Num' onClick={this.props.mainClick} >2</button>
          <button value='3' className='Num' onClick={this.props.mainClick} >3</button>
          <button value='-' className='Op' onClick={this.props.mainClick} >-</button>
        </div>
        <div className='Row'>
          <button value='0' className='Num TwoWide' onClick={this.props.mainClick} >0</button>
          <button value='.' className='Num' onClick={this.props.mainClick} >.</button>
          <button value='+' className='Op' onClick={this.props.mainClick} >+</button>
        </div>
      </div>
    )
  }
}

export default Keypad;