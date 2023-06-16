const mongoose = require('mongoose');
require('dotenv').config();

const dbconnection = () => {
      mongoose
            .connect(process.env.MONGODB_URI, {
                  useNewUrlParser: true,
                  useUnifiedTopology: true
            })
            .then(() => {
                  console.log('Connected to MongoDB');
            })
            .catch(err => {
                  console.log('Error in connecting to MongoDB: ', err);
            });

}

module.exports = dbconnection;