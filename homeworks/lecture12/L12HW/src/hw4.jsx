import React from "react";

class HW4 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            inputValue : "",
            outputValue: ""
        };
    }

    handleChange = (e) => {
        let num = e.target.value;
        let output;
        if(!isNaN(+num)){
            let lastNum = num % 10;
            //console.log(lastNum);
            if(lastNum === 1) output = num + "st";
            else if(lastNum == 2) output = num + "nd";
            else if(lastNum == 3) output = num + "rd";
            else output = num + "th";
        }
        //console.log("input: "+ num+" output: "+output);
        this.setState({inputValue: num, outputValue : output});
    }

    render(){
        const horizontal = {
            display :"flex",
            flexDirection :"row",
            alignItems: "center",
            justifyContent: "center",
            padding: "10px"
        };

        return(
            <div style = {horizontal}> 
              
               <input id = "input" type = "text" onChange = {(e) => this.handleChange(e)}></input>
               
               <input id = "output" type = "text" value={this.state.outputValue}></input>
              
            </div>
        );
    }
}

export default HW4;