import React from "react";

class HW1 extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            todolist: [],
            selected: [],
            markall: false
        }
    }

    handleKeyDown = (e) => {
        if(e.key === "Enter"){
            // console.log("new input entered" + e.target.value);
            let arr = [...this.state.todolist];
            arr.push(""+e.target.value);
            this.setState({todolist: arr});
            e.target.value = "";
        }
            
    }

    handleButtonClick = (e) => {
        this.setState({markall : false});
        this.setState({selected : []});
        // console.log("clear all clicked" + e.target.value);
    }

    handleMarkAll = (e) => {
        if(e.target.checked){
            this.setState({markall : true});
            this.setState({selected : this.state.todolist});
            // console.log("mark all clicked" + e.target.value);
        }
        
    }

    handleMark = (e) => {
        if(e.target.checked){
            // console.log(e.target.id);
            let arr = [...this.state.selected];
            arr.push(+e.target.id);
            this.setState({selected: arr});
            // console.log(this.state.selected);
        }
        else{
            let arr = [...this.state.selected];
            arr.pop();
            this.setState({selected: arr});
            // console.log(this.state.selected);
        }
        //// console.log(e.target.checked)
    }

    render(){
        const horizontal = {
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            flexDirection :"row"
        }
        const left = {
            display:"flex",
            justifyContent:"space-between",
            alignItems:"left",
            flexDirection :"row"
        }
        const space = {
            margin: "0 5px",
            padding :"2px",
            verticalAlign: "left",
            display: "flex",
            listStyleType: "none",
            alignItems:"left",
            flexDirection :"column"
        }

        const list = {
            listStyleType: "none", 
            border: "solid", 
            borderWidth: "0.3px",
            borderColor: "grey",
            margin: "1px"
        }
        
        return(
            <>
            <div>
                <h1>Todos - ReactJs</h1>
            </div>

            <div className="inputBar">
                <input type = "text" size="70" placeholder="Type a todo and hit Enter" onKeyDown={(e)=> this.handleKeyDown(e)}></input>
            </div>

            <div className="horizontal" style={horizontal}>
                <p>{this.state.todolist.length - this.state.selected.length + " remaining"}</p>
                <button onClick={(e) => this.handleButtonClick(e)}>Clear Completed Todos</button>
            </div>

            <div className="markall" style={left}>
                <label>
                    <input type = "checkbox" onClick={(e) => this.handleMarkAll(e)}></input>
                    Mark All Done
                </label>
            </div>

            <div className="todoContent" style={space}>
                {/* {[...Array(5)].map((item, index)=>( */}
                {this.state.todolist.map((item, index) => {
                    return (
                        <li key = {index} style= {list} >
                            <label key = {index}>
                                <input type = "checkbox" checked = {this.state.markall} key = {index} onClick={(e) => this.handleMark(e)}></input>
                                {item}
                            </label>
                        </li>
                    );
                })}
            </div>
            </>
        )
    }
}
export default HW1;