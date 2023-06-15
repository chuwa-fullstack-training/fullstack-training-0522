const mongoose = require('./connect');
const { Employee, Company } = require('./schema');

const getEmployeesByCompany = async (companyID) => {
      const company = await Company.findById(companyID);

      for (let employeeID of company.employees) {
            const employee = await Employee.findById(employeeID)
            console.log(employee);
      }
      mongoose.disconnect();
}

module.exports = getEmployeesByCompany;