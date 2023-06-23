import React from 'react';

class Hw4 extends React.Component {
      constructor(props) {
            super(props);
            this.state = {
                  str: ""
            };
      }

      handleChange = (e) => {
            const suffixes = { 1: "st", 2: "nd", 3: "rd" };
            const num = parseInt(e.target.value);

            if (isNaN(num)) {
                  this.setState({ str: e.target.value });
                  return;
            }

            const lastDigit = num % 10;
            const secondLastDigit = Math.floor((num % 100) / 10);

            let suf = "th";
            if (secondLastDigit !== 1 && suffixes[lastDigit]) suf = suffixes[lastDigit];
            this.setState({ str: num + suf });
      }

      render() {
            return (
                  <div>
                        <input type='text' placeholder='Enter a number' onChange={this.handleChange}></input>
                        <input type='text' value={this.state.str}></input>
                  </div>
            )
      }
}

export default Hw4;