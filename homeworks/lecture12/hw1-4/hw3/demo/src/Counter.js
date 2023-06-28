import './Counter.css';
import React from 'react';

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      count: ''
    };
  }
  

  handleClick = (props) => {
    this.setState({
      count: this.state.count + props
    });
  }

  handleClear = () => {
    this.setState({
      count: 0
    });
  }
  render() {
    return (
    <div className="Counter">
      <div className="addCounter">
        <button className='botton' onClick={()=> this.handleClick(1)}>+1</button>
        <button className='botton' onClick={()=> this.handleClick(10)}>+10</button>
        <button className='botton' onClick={()=> this.handleClick(100)}>+100</button>
        <button className='botton' onClick={()=> this.handleClick(1000)}>+1000</button>
        <button className='botton' onClick={this.handleClear}>Clear</button>
      </div>
      <p className='result'>{this.state.count}</p>
    </div>
  );
}
}

export default Counter;
