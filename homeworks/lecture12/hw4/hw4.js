import React from 'react';

class Converter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      suffix: '',
    };
  }
  handleNumberChange = (event) => {
    const enterNumber = event.target.value;
    let calculatedSuffix = '';
    if (!Number(enterNumber)) {
      calculatedSuffix = enterNumber;
    } else {
      this.setState({ number: enterNumber });
      const lastDigit = Number(enterNumber) % 10;
      const secondLastDigit = Number(enterNumber) % 100;

      if (secondLastDigit !== 11 && lastDigit === 1) {
        calculatedSuffix = enterNumber + 'st';
      } else if (secondLastDigit !== 12 && lastDigit === 2) {
        calculatedSuffix = enterNumber + 'nd';
      } else if (secondLastDigit !== 13 && lastDigit === 3) {
        calculatedSuffix = enterNumber + 'rd';
      } else {
        calculatedSuffix = enterNumber + 'th';
      }
    }
    this.setState({ suffix: calculatedSuffix });
  };

  render() {
    const { number, suffix } = this.state;

    return (
      <div>
        <input type='text' value={number} onChange={this.handleNumberChange} />
        <input type='text' value={suffix} readOnly />
      </div>
    );
  }
}
export default Converter;
