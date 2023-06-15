const mongoose = require('./connect');
const { Employee } = require('./schema');

const getEmployeeById = (id) => {
      Employee.findById(new mongoose.Types.ObjectId(id))
            .then(employee => {
                  console.log(employee);
            })
            .catch(err => {
                  console.log('Error in getting employee by ID', err);
            })
            .finally(() => {
                  mongoose.disconnect();
            });
};

module.exports = getEmployeeById;