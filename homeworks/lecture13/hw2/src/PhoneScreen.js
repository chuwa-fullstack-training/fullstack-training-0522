import React from 'react';
import './PhoneScreen.css';

class PhoneScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickStatus: '',
    };
  }

  handleButtonClick = (e) => {
    const status = `App ${e.target.value} is clicked`;
    this.setState({ clickStatus: status });
  };

  render() {
    return (
      <div className='phone-screen'>
        <div className='status-bar'>{this.state.clickStatus}</div>
        <div className='app-buttons'>
          {Array.from({ length: 20 }).map((_, index) => (
            <button
              key={index}
              onClick={this.handleButtonClick}
              value={index + 1}
            >
              App {index + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
export default PhoneScreen;
