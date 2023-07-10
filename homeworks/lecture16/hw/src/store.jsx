import React from "react";
import { createStore } from "redux";
import { useSelector, useDispatch, Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {Reducers, markallReducer, selectedReducer, todolistReducer} from './reducer';
// import HW1tk from "./redux-tk/hw1-tk";


 const store = createStore(Reducers);

 export default store;