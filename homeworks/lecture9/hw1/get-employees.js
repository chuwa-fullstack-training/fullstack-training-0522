const mongoose = require('./connect');
const { Employee } = require('./schema');

const getAllEmployees = () => {
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
}

module.exports = getAllEmployees;