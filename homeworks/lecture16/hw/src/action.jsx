import React from "react";
import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";


const addtodo = (todo) => ({
    type: 'ADD_TODO',
    payload: todo
});

const addSelectedtodo = (todo) => ({
    type: 'ADD_SELECTED_TODO',
    payload: todo
});

const deleteSelectedtodo = () => ({
    type: 'DELETE_SELECTED_TODO'
});

const setTrue = () => ({
    type: "SET_TRUE"
});

const setFalse = () => ({
    type: "SET_FALSE"
});

const setSelected = (selected) => ({
    type: "SET_SELECTED",
    payload: selected
})
export {addtodo, addSelectedtodo, deleteSelectedtodo, setFalse, setTrue, setSelected};