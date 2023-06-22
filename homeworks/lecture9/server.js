/* Express is a node js web application framework that provides broad features for building web and mobile applications. It is used to build a single page, multipage, and hybrid web application. It's a layer built on the top of the Node js that helps manage servers and routes. */

// require the express module
const express = require("express");
const mongoose = require("mongoose"); // for mongodb connection
const company = require("./controllers/company");
const employee = require("./controllers/employee");
const app = express();
const port = 3000;

// middleware - set to json
app.use(express.json());

// connect to mongodb
mongoose.connect("mongodb+srv://xiaweih610:LPkMMdq2PfvJdfTl@lecture9hw.doboqem.mongodb.net/", {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to MongoDB");
    // connect to mongodb first, then start the server
    app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    }); 
}).catch(err => {
    console.log("Error connecting to MongoDB", err);
});

// routes
app.get("/", (req, res) => {
    res.send("Hello Allen!");
})
app.use("/", company);
app.use("/", employee);