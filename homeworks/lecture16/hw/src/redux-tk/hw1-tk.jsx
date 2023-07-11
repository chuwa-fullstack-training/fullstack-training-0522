import React, { useState } from 'react';
import { configureStore, createSlice } from '@reduxjs/toolkit';
import { useSelector, useDispatch, Provider } from 'react-redux';

export const todoList = createSlice({
    name:'todoList',
    initialState: [],
    reducers:{
         addTodo: (state, action) => {
            state.push({text: action.payload, selected: false});
         },
        
        // removeTodoById : (state , action )=>{
        //     return [...state].filter((item)=> item._
        // }
         selectTodo: (state, action) => {
            state[action.payload].selected = !state[action.payload].selected;
         },

         markAll: (state, action) => {
            state.map((item, index) => {item.selected = true});
         },

         clearAll: (state, action) => {
            state.map((item, index) => {item.selected = false});
         }
    }
});
export const {addTodo, selectTodo, markAll, clearAll} = todoList.actions;// add const

const store = configureStore ({reducer: todoList.reducer});

function HW1tk () {
    const todolist = useSelector(state => state);//why use state=>state.todoList will return undefined not []?
    const dispatch = useDispatch();
    console.log(todolist);


    const handleKeyDown = (e) => {
        if(e.key === "Enter"){
            console.log("new input entered");
            dispatch(addTodo(e.target.value));
            e.target.value = "";  
        }
         
    }

    const handleButtonClick = (e) => {
        console.log("clearAll");
        dispatch(clearAll());
    }

    const handleMarkAll = (e) => {
        if(e.target.checked){
            console.log("markAll");
           dispatch(markAll());
        }
        
    }

    const handleMark = (index) => {
        // if(e.target.checked){
            
        // }
        // else{
           
        // }
        console.log(index);//e.target.key is undefined
        dispatch(selectTodo(index));
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
                <p>{todolist.filter(ele => ele.selected === false).length + " remaining"}</p>
                <button onClick={(e) => handleButtonClick(e)}>Clear Completed Todos</button>
            </div>

            <div className="markall" style={left}>
                <label>
                    <input type = "checkbox" onClick={(e) => handleMarkAll(e)}></input>
                    Mark All Done
                </label>
            </div>

            <div className="todoContent" style={space}>
                
                {todolist.map((item, index) => {
                    return (
                        <li  key = {index} style= {list} >
                            <label key = {index}>
                                <input type = "checkbox" checked = {item.selected} value = {item}
                                key = {index} onClick={() => handleMark(index)}></input>
                                {item.text}
                            </label>
                        </li>
                    );
                })}
            </div>
        </>
    );
}

export {HW1tk, store};