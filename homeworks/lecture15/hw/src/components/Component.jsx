import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { Outlet, Link } from "react-router-dom";
import { useNavigate, useLocation } from 'react-router-dom';

export default function Component(){
    const navigate = useNavigate();
    let {state} = useLocation();
    console.log(state);
    const [box, setBox] = useState(state);
    
    const handleColor = (e) =>{
        console.log(e.target.value);
        setBox((prevState) => ({...prevState, color: ""+e.target.value}));
        console.log(box);
    }

    const handleInput = (e) => {
        if (e.key === "Enter"){
            console.log("input changed");
            console.log(e.target.value, e.target.id);
            setBox((prevState) => ({...prevState, boxName: e.target.value}));
            console.log(box);
        }
    }

    const handleClick = (e) => {
        navigate("/", {state: box});
    }

    const card = {
        width : '30%',
        height :"300px",
        // backgroundColor: boxes.color || "#fff",
        alignItems: "center",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: "3px",
        margin: "auto",
        padding: "auto"
    }


    return(
        <>
        <div className="name">
            Box Name: {box.boxName}
            <br/>
        </div>

        <div className="dropColor">
        <select onChange={(e) => handleColor(e)}>
                    <option value="white">white</option>
                    <option value="red">red</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="grey">grey</option>
                    <option value="yellow">yellow</option>
                    <option value="purple">purple</option>
        </select>
        <br/>
        </div>

        <div key={state.id} style={{...card, backgroundColor: box.color}}>
                 
            <input id = {state.id} type = "text" style={{backgroundColor: "white",  align: "center"}} 
                onKeyDown={(e) => handleInput(e)} placeholder={box.boxName}></input>
            <br/>
        </div>
            <button onClick={(e) => handleClick(e)}>Back to boxes</button>
        </>
    )
}