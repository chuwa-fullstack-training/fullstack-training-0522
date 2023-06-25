import React from "react";
import "./styles.css";


class App extends React.Component{




    constructor(props) {
        super(props);
        this.state = {
            todos:[],
            total:0
        }
    };


    _handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            // console.log(e.target.value);
            this.setState({total:this.state.total+1, todos:[...this.state.todos, {content:e.target.value, finished:false}]});
        }
      }

    
    _handleCheckbox = (e) =>{
        if(e.target.checked){
            this.setState({total:this.state.total-1})
        }else{
            this.setState({total:this.state.total+1})
        }
    }
    
    _clearAll = () =>{
        this.setState({todos:[], total:0})
    }

    _markAll = () =>{
        this.setState({ total:this.state.todos.length})
    }

    render(){
        return(
            <div>
                <p> Todos - ReactJs </p>
                <input type="text" onKeyDown={this._handleKeyDown} value = {this.input} defaultValue="Type a todo and hit Enter"/>
                <div style={{display:"flex", "justifyContent": "center"}}>
                    <p> {this.state.total} remaining </p> 
                    <button id="clear" onClick={this._clearAll} value="text">Clear Completed Todos</button>
                </div>

                <button style={{position: "absolute", left:"40%"}} onClick={this._markAll} value="text">Mark All Done</button>
                {this.state.todos.map((todo)=>(
                    <div>
                        <input type="checkbox" onClick={this._handleCheckbox}  onChange={this._handleCheckbox} value="Text"  />
                        <p style = {{fontSize:"20px"}} key={todo}> {todo.content}  </p>
                    </div>
                ))
                }

            </div>
        );
    }
}

export default App;