const mongoose = require('./connect');
const { Employee } = require('./schema');

/**
 * Read a user by id
 */
const ID = new mongoose.Types.ObjectId('64942bc4658c32117593d79f');
Employee.findById(ID)
  .then(employee => {
    console.log(employee);
  })
  .catch(err => {
    console.log('Error finding employee', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });