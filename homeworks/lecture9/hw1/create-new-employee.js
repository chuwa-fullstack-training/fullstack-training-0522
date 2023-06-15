const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

const createNewEmployee = (employeeData) => {
      const employee = new Employee(employeeData);

      employee
            .save()
            .then(savedEmployee => {
                  console.log(`New employee '${savedEmployee.firstName} ${savedEmployee.lastName}' saved!`);

                  return Company.findByIdAndUpdate(
                        new mongoose.Types.ObjectId(savedEmployee.company),
                        { $push: { employees: savedEmployee._id } }
                  );
            })
            .then(updatedCompany => {
                  console.log(`Company '${updatedCompany.name}' has been updated!`);
            })
            .catch(err => {
                  console.log('Error in creating a employee', err);
            })
            .finally(() => {
                  mongoose.disconnect();
            })
}

module.exports = createNewEmployee;