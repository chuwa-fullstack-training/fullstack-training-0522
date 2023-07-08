const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://lzx990925:990925@cluster0.llkuau0.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection established");
  })
  .catch((err) => console.log(err));

module.exports = mongoose;