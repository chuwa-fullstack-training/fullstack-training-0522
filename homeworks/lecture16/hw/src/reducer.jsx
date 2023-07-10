import React from "react";
// import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";
import {combineReducers} from'redux';


const todolistReducer = (state = [], action) => {
    switch(action.type){
        case 'ADD_TODO':
            return [...state, action.payload];
            
        default:
            return state;
    }
};



const selectedReducer = (state = [], action) => {
    switch(action.type){
        case "ADD_SELECTED_TODO":
            state.push(action.payload);
            return state;
        case "DELETE_SELECTED_TODO":
            state.pop();
            return state;
        case "SET_SELETED":
            state = action.payload;
            return state;
        default:
            return state;
    }
};

const markallReducer = (state = false, action) => {
    switch(action.type){
        case "SET_TRUE":
            state = true;
            return state;
        case "SET_FALSE":
            state = false;
            return state;
        default:
            return state;
    }
};

const Reducers = combineReducers({
    todolist: todolistReducer,
    selected: selectedReducer,
    markall: markallReducer  
});

export {Reducers, markallReducer, selectedReducer, todolistReducer};