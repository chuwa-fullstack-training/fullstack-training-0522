import React from "react";
import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";
import {Reducers, markallReducer, selectedReducer, todolistReducer} from './reducer';
import {addtodo, addSelectedtodo, deleteSelectedtodo, setFalse, setTrue, setSelected} from './action';
import store from './store';

export default function HW1() {
    const todolist = useSelector(state => state.todolist);
    const selected = useSelector(state => state.selected);
    const markall = useSelector(state => state.markall);
    let select = 0;
    let length = Math.abs(todolist.length - select);

    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            console.log("new input entered" + e.target.value);
            dispatch(addtodo(e.target.value));
            e.target.value = "";
        }
    }

    const handleButtonClick = (e) => {
        dispatch(setFalse());
        select = 0;
        dispatch(setSelected([]));
        console.log("clear all clicked" + length);
    }

    const handleMarkAll = (e) => {
        if(e.target.checked){
            dispatch(setTrue());
            dispatch(setSelected(todolist));
            select =  todolist.length;
            console.log(markall, length, todolist);
        }
       
    }

    const handleMark = (e) => {
        if(e.target.checked){
            e.target.checked = true;
            console.log("checked is true");
            dispatch(addSelectedtodo(e.target.id));
            select ++;
            console.log(todolist.length);
            console.log(select);
        }
        else{
            console.log("checked is false");
            e.target.checked = false;
            dispatch(deleteSelectedtodo());
            select--;
            console.log(todolist.length);
            console.log(select);
        }
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
                <p>{Math.abs(todolist.length - selected.length) + " remaining"}</p>
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
                                <input type = "checkbox" checked ={markall} key = {index} onChange={(e) => handleMark(e)}></input>
                                {item}
                            </label>
                        </li>
                    );
                })}
            </div>
        </>
    );
} 

