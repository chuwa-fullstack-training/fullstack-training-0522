import React from "react";

class HW2 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            text : "status bar"
        };
    }

    handleClick = (num)=> {
        console.log(num);
        this.setState({text: `App ${num} is running...`})
    }

    render(){
        const buttons = {
            padding: "2px",
            margin:"2px",
            border:'1px solid',
            width: "23%"
        };
        const divBox = {
            width: "240px",
            backgroundColor: "lightblue"
        }
        const buttonList = Array.from({length:20}, (item, index) => index +1);

        return (
            <>
            <div className="bar" style={divBox}>
                <label >{this.state.text}</label>
            </div>

            <div className="buttons" style={divBox}>
                {buttonList.map(n => {
                    return <button style={buttons} onClick={() => this.handleClick(n)}>{n}</button>
                })}
            </div>
            </>
        );
    }
}
export default HW2;