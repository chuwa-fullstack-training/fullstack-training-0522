const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

const deleteEmployeeID = async (employeeID) => {
      const employee = await Employee.findById(employeeID);

      // delete from company's employees
      await Company.findByIdAndUpdate(
            employee.company,
            { $pull: { employees: employeeID } },
            { useFindAndModify: false }
      );

      await Employee.findByIdAndDelete(employeeID)
            .then(res => {
                  console.log('Employee deleted ', res);
            })
            .catch(err => {
                  console.error('Error in deleting employee ', err);
            })
            .finally(() => {
                  mongoose.disconnect();
            });
}

module.exports = deleteEmployeeID;