import React from "react";

class App extends React.Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        };
        this.clickAdd1 = this.clickAdd1.bind(this);
        this.clickAdd10 = this.clickAdd10.bind(this);
        this.clickAdd100 = this.clickAdd100.bind(this);
        this.clickAdd1000 = this.clickAdd1000.bind(this);
    }




    clickAdd1(){
        this.setState({
            count:this.state.count + 1
        })
    }

    clickAdd10(){
        this.setState({
            count:this.state.count + 10
        })
    }

    clickAdd100(){
        this.setState({
            count:this.state.count + 100
        })
    }

    clickAdd1000(){
        this.setState({
            count:this.state.count + 1000
        })
    }

    render(){
        return(
            <>
            <div style={{display:"flex",fontSize: "20px"}}>
                <button onClick={this.clickAdd1}  style={{display:"flex",fontSize: "20px"}}> +1 </button>
                <button onClick={this.clickAdd10} style={{display:"flex",fontSize: "20px"}}> +10 </button>
                <button onClick={this.clickAdd100} style={{display:"flex",fontSize: "20px"}}> +100 </button>
                <button onClick={this.clickAdd1000} style={{display:"flex",fontSize: "20px"}}> +1000 </button>
            </div>
            <h1>{this.state.count}</h1>

            </>
        );
    }
}

export default App;