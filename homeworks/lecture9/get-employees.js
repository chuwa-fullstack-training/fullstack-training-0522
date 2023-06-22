const mongoose = require('./connect');
const { Employee } = require('./schema');


Employee.find()
  .then((employees) => {
    console.log(employees);
  })
  .catch(err => {
    console.error('Error finding all employees ', err);
  })
  .finally(() => {
    mongoose.disconnect();
})