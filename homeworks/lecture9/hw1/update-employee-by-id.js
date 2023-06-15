const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

const updateEmployeeByID = async (employeeID, newData) => {
      const employee = await Employee.findById(employeeID);

      // Update Company's employees array
      if ('company' in newData && newData.company !== employee.company) {
            try {
                  const old_companyID = employee.company;
                  const new_companyID = newData.company;

                  // DELETE from old company
                  await Company.findByIdAndUpdate(
                        old_companyID,
                        { $pull: { employees: employeeID } },
                        { useFindAndModify: false }
                  );

                  // ADD into new company
                  await Company.findByIdAndUpdate(
                        new_companyID,
                        { $push: { employees: employeeID } },
                        { useFindAndModify: false }
                  )
            } catch (error) {
                  throw new Error("ERROR in updating company's employee");
            }
      }

      Employee.findByIdAndUpdate(employeeID, newData)
            .then(() => {
                  console.log(`Employee updated!`);
            })
            .catch(err => {
                  console.log('Error updating employee', err)
            })
            .finally(() => {
                  mongoose.disconnect();
            });
}

module.exports = updateEmployeeByID;