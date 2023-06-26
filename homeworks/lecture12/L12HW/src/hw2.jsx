import React from "react";

class HW2 extends React.Component {
    
    render(){
        const border = {
            width: "100%",
            height: "100%",
            border: "solid",
            margin: "2px"
        }
        const horizontal = {
            textAlign: "center",
            display: "flex",
            flexDirection: "row"
        };
        return(
            <>
            <div class = "header" style={border}>
                <h1> Header </h1> 
            </div>

            <div class = "nav" style={border}>
                <nav>
                    <h1> Nav </h1>
                </nav>
            </div>

            <div class = "content" style={horizontal}>
                <aside style={{...horizontal, ...border, ...{width : "30%"}}} >
                    <h1>Aside</h1>
                </aside>
                <section style = {{...horizontal, ...border, ...{width : "70%"}}}>
                    <h1> Section </h1>
                </section>
            </div>

            <div class = "footer" style={border}>
                <footer>
                    <h1> Footer </h1>
                </footer>
            </div>
            </>
        );
    }
}

export default HW2;