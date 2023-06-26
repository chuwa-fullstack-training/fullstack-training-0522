import React from "react";

class HW3 extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          counter: 0
        };
    }
    
    handleClick = (num) => (e) => {
        this.setState({counter: this.state.counter + num});
    }
   
    render(){

        const horizontal = {
            display :"flex",
            flexDirection :'"row"',
        };
        const buttonStyle = {
            margin : "2px",
            padding : "2px",
            backgroundColor : "yellow",
            fontSize : "50px"
        }
        return(
            <>
            <div>
               <button style = {buttonStyle} onClick = {this.handleClick(1)}>+1</button>
               <button style = {buttonStyle} onClick = {this.handleClick(10)}>+10</button>
               <button style = {buttonStyle} onClick = {this.handleClick(100)}>+100</button>
               <button style = {buttonStyle} onClick = {this.handleClick(1000)}>+1000</button>
               
               <h2>count: {this.state.counter}</h2>
            </div>
            </>
        );
    }
}

export default HW3;