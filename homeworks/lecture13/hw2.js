import React from "react";
import "./styles.css";

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            todos:[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]
        }
    };

    handleClcik = (number) => () =>{
        console.log(number);
    };
    render(){          
        return this.state.todos.map((arr) => (
            <div className="grid-container">
                <button className="grid-item" onClick={this.handleClcik(arr[0])}> {arr[0]} </button>
                <button className="grid-item"  onClick={this.handleClcik(arr[1])}> {arr[1]} </button>
                <button className="grid-item"  onClick={this.handleClcik(arr[2])}> {arr[2]} </button>
                <button className="grid-item"  onClick={this.handleClcik(arr[3])}> {arr[3]} </button>
            </div>
        ));
      
    }
}

export default App;