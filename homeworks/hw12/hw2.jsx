import React from "react";

class App extends React.Component{

   

    render(){
        const wholerow = {
            border: '10px solid #696969',
            marginTop: '10px',
            display:"flex",
            justifyContent: "center",
            height: 80,
            textAlign:"center",
            alignItems: 'center', //Centered horizontally
            flex:1,
            fontSize:"30px"
        }
        const wholerow1 = {
            border: '10px solid #696969',
            marginTop: '10px',
            display:"flex",
            justifyContent: "center",
            height: 50,
            textAlign:"center",
            alignItems: 'center', //Centered horizontally
            flex:1,
            fontSize:"30px"
        }
        const wholerow2 = {
            display:"flex",
            border: '10px solid #696969',
            marginTop: '10px',
            justifyContent: "center",
            height: 250,
            textAlign:"center",
            alignItems: 'center', 
            width:"30%",
            fontSize:"30px"
        }
        const wholerow3 = {
            display:"flex",
            border: '10px solid #696969',
            marginTop: '10px',
            justifyContent: "center",
            height: 250,
            textAlign:"center",
            alignItems: 'center', //Centered horizontally
            flex:1,
            width:"70%",
            fontSize:"30px"
        }



        return(
            <div>
                 <div style={wholerow}>Header</div>
                 <div style={wholerow1}>Nav </div>
                 <div style={{display:"flex"}}>
                    <div placeholder = 'Aside' style = {wholerow2}>Aside </div>
                    <div placeholder = 'Section' style = {wholerow3}>Aside </div>
                 </div>
                 <div style={wholerow1}>Footer </div>
                 
       
       
            </div>
        );
    }
}

export default App;