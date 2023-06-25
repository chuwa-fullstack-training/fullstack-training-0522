const mongoose = require('mongoose');
require('dotenv').config();

const connect = () => { mongoose
  .connect('mongodb+srv://q969449115:102734@cluster0.wszbqdc.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });
};

module.exports = connect;