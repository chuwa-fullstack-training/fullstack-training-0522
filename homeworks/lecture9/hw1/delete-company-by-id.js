const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

const deleteCompanyByID = async (companyID) => {
      const company = await Company.findById(companyID);

      for (let employeeID of company.employees) {
            var employee = await Employee.findById(employeeID);
            employee.company = null;
            employee.jobTitle = null;
            employee.resigned = true;
            employee.salary = 0;
            await employee.save();
      }

      Company.findByIdAndDelete(companyID)
            .then(res => {
                  console.log('Company deleted ', res);
            })
            .catch(err => {
                  console.error('Error deleting company', err);
            })
            .finally(() => {
                  mongoose.disconnect();
            });
}

module.exports = deleteCompanyByID;