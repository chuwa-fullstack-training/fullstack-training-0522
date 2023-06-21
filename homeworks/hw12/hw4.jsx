import React from "react";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            textInput:null
        }
        
    }

    reset(){
        this.setState({
            textInput:null
        });
    }

    render(){
        return(
            <div style={{display:"flex",justifyContent: "center", height: 40,}}>
              <input onChange={evt => this.updateInput(evt)}></input>  
              <input value={this.state.textInput}></input>
            </div>
        )
    }

    updateInput(evt){
        let val = evt.target.value;
        if(isNaN(val)) {}
        else if(val==='1') val = "1st"
        else if(val==='2') val = "2nd"
        else if(val==='3') val = '3rd'
        else val = val+"th"
        this.setState({
            textInput:val
        })
    }
}

export default App;