const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfullyt connected to MongoDB.");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
