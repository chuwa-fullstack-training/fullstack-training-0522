const mongoose = require('./connect');
const { Employee } = require('./schema');

/**
 * Update a user
 */
const ID = new mongoose.Types.ObjectId('64942bc4658c32117593d79f');
Employee.findByIdAndUpdate(ID, {
  firstName: 'Robbin',
  lastName: 'Lee'
})
  .then(() => {
    console.log('Employee updated');
  })
  .catch(err => {
    console.log('Error updating employee', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });