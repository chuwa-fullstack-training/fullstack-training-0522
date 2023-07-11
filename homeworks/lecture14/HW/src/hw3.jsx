import React from "react";
import { useState } from 'react'

function HW3 (){
    const [todolist, setTodolist] = useState([]);
    const [selected, setSelected] = useState([]);
    const [markall, setMarkall] = useState(false);

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            console.log("new input entered" + e.target.value);
            let arr = [...todolist];
            arr.push(""+e.target.value);
            // this.setState({todolist: arr});
            setTodolist(arr);
            e.target.value = "";
        }
            
    }

    const handleButtonClick = (e) => {
        // this.setState({markall : false});
        // this.setState({selected : []});
        setMarkall(false);
        setSelected([]);
        console.log("clear all clicked" + e.target.value);
    }

    const handleMarkAll = (e) => {
        if(e.target.checked){
            // this.setState({markall : true});
            // this.setState({selected : this.state.todolist});
            setMarkall(true);
            setSelected(todolist);
            console.log("mark all clicked" + e.target.value);
        }
        
    }

    const handleMark = (e) => {
        if(e.target.checked){
            // console.log(e.target.id);
            let arr = [...selected];
            arr.push(e.target.id);
            // this.setState({selected: arr});
            setSelected(arr);
            console.log(selected);
        }
        else{
            let arr = [...selected];
            arr.pop();
            // this.setState({selected: arr});
            setSelected(arr);
            console.log(selected);
        }
        //// console.log(e.target.checked)
    }

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

    return (
        <>
            <div>
                <h1>Todos - ReactJs</h1>
            </div>

            <div className="inputBar">
                <input type = "text" size="70" placeholder="Type a todo and hit Enter" onKeyDown={(e)=> handleKeyDown(e)}></input>
            </div>

            <div className="horizontal" style={horizontal}>
                <p>{todolist.length - selected.length + " remaining"}</p>
                <button onClick={(e) => handleButtonClick(e)}>Clear Completed Todos</button>
            </div>

            <div className="markall" style={left}>
                <label>
                    <input type = "checkbox" onClick={(e) => handleMarkAll(e)}></input>
                    Mark All Done
                </label>
            </div>

            <div className="todoContent" style={space}>
                {/* {[...Array(5)].map((item, index)=>( */}
                {todolist.map((item, index) => {
                    return (
                        <li key = {index} style= {list} >
                            <label key = {index}>
                                <input type = "checkbox" checked = {markall} key = {index} onChan={(e) => handleMark(e)}></input>
                                {item}
                            </label>
                        </li>
                    );
                })}
            </div>
        </>
    );
}
export default HW3;