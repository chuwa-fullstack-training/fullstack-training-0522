import React from "react";
import { useState, useEffect } from "react";


function HW2 (){
    const [boxes, setBoxes] = useState([
        {boxName: "first", color: "white"},
        {boxName: "second", color: "white"},
        {boxName: "third", color: "white"},
        {boxName: "fourth", color: "white"},
        {boxName: "fifth", color: "white"},
        {boxName: "sixth", color: "white"}
    ]);

    const [selectedBox, setSelectedBox] = useState(0);

    const handleName = (e) => {
        console.log("name changed");
        console.log(e.target.value);
        let index = +e.target.value ?? 0;
        setSelectedBox(index);
        
    }

    const handleColor = (e) => {
        console.log("colorChanged");
        console.log(e.target.value);
        let index = selectedBox;
        let newBoxList = [...boxes];
        newBoxList[index].color=""+e.target.value ?? "white";
        setBoxes(newBoxList);
        console.log(boxes);
    }

    const handleInput = (e) => {
        // e.preventDefault();
        if (e.key === "Enter"){
            console.log("input changed");
            console.log(e.target.value, e.target.id);
            let index = e.target.id;
            let newBoxList = [...boxes];
            newBoxList[index].boxName = ""+e.target.value ?? "";
            setBoxes(newBoxList);
            console.log(boxes);
        }
        
    }

    const horizontal = {
        display:"flex",
        flexDirection:'row',
        justifyContent:'space-between'
    };

    const box = {
        width : '30%',
        height :"300px",
        // backgroundColor: boxes.color || "#fff",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: "3px",
        margin: "15px",
        padding: "5px"
    }

    return (
        <>
        <div className="Choices" style={horizontal}>
            <div className="dropName">
                <select onChange={(e) => handleName(e)}>
                    <option value="0">{boxes[0].boxName}</option>
                    <option value="1">{boxes[1].boxName}</option>
                    <option value="2">{boxes[2].boxName}</option>
                    <option value="3">{boxes[3].boxName}</option>
                    <option value="4">{boxes[4].boxName}</option>
                    <option value="5">{boxes[5].boxName}</option>
                </select>
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
            </div>
        </div>
        <div className="box" style={horizontal}>
            {boxes.map((item, index) => {
                return <div key={index} style={{...box, backgroundColor: item.color}}>
                    {/* Box Name:{item.boxName}, Color:{item.color}<br/>{item */}
                <input id = {index} type = "text" style={{backgroundColor: "white"}} onKeyDown={(e) => handleInput(e)} placeholder={item.boxName}></input>
                </div>
            })}
        </div>
        </>
    );
}
export default HW2;