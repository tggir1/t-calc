import React, { Component } from 'react';

class Viewbar extends Component {
  render() {
    return (
      <div className='Viewbar'>
        <span>{this.props.display}</span>
      </div>
    );
  }
}

export default Viewbar;