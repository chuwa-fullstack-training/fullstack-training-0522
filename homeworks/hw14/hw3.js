import React from "react";
import { useState } from "react";
import './styles.css';

export default function Hw3(){
    const [state,setState] = useState([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16],[17,18,19,20]]);

    const handleClcik = (number) =>{

        console.log(number);
    };

    const list = state.map((arr) => (
        <div className="grid-container">
            <button className="grid-item" onClick={()=>handleClcik(arr[0])}> {arr[0]} </button>
            <button className="grid-item"  onClick={()=>handleClcik(arr[1])}> {arr[1]} </button>
            <button className="grid-item"  onClick={()=>handleClcik(arr[2])}> {arr[2]} </button>
            <button className="grid-item"  onClick={()=>handleClcik(arr[3])}> {arr[3]} </button>
        </div>
    ));

    return (
        list
    )
}