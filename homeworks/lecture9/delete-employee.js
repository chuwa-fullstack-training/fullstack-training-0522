const mongoose = require('./connect');
const { Employee } = require('./schema');

/**
 * Delete a user
 */
const ID = new mongoose.Types.ObjectId('64942bc4658c32117593d79f');
Employee.findByIdAndDelete(ID)
  .then(res => {
    console.log('Employee deleted', res);
  })
  .catch(err => {
    console.log('Error deleting employee', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });