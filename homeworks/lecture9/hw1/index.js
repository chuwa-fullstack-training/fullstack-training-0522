const mongoose = require('./connect');

// APIs
const createNewCompany = require('./create-new-company');
const createNewEmployee = require('./create-new-employee');
const getEmployeeById = require('./get-employee-by-id');
const getCompanyById = require('./get-company-by-id');
const updateCompanyByID = require('./update-company-by-id');
const updateEmployeeByID = require('./update-employee-by-id');
const deleteCompanyByID = require('./delete-company-by-id');
const deleteEmployeeByID = require('./delete-employee-by-id');
const getAllCompanies = require('./get-companies');
const getAllEmployees = require('./get-employees');
const getEmployeesByCompany = require('./get-employees-by-company');

const companyData1 = { name: 'Google', industry: 'IT' };
const companyId1 = '648b2e74afabf9fd97ca6ced';
const companyData2 = { name: 'Pfizer', industry: 'Medical Industry' };
const companyId2 = '648b2e7bf3f9d3f5e06f985d';

const employeeData1 = {
      firstName: 'Alex',
      lastName: 'Zhang',
      company: companyId1,
      jobTitle: 'Software Engineer',
      salary: 90000
}
const employeeId1 = '648b2e8e9189f0580eef62ad';

const employeeData2 = {
      firstName: 'Michel',
      lastName: 'Ray',
      company: companyId2,
      jobTitle: 'Pharmacist',
      salary: 110000,
}
const employeeId2 = '648b2e926f31ef3e08090f29';

const newCompanyData = {
      description: 'The best company in US'
}

// update employee
const employeeId = '648b2e926f31ef3e08090f29';
const newEmployeeData = {
      company: '648a7a3d6634f6b9c1be0bef',
      jobTitle: 'Secure',
      salary: 30000
}

createNewCompany(companyData1);
createNewCompany(companyData2);

createNewEmployee(employeeData1);
createNewEmployee(employeeData2);

getEmployeeById(employeeId2);
getCompanyById(companyId2);

updateCompanyByID(companyId1, newCompanyData);
updateEmployeeByID(employeeId, newEmployeeData);

deleteCompanyByID(companyId1);
deleteEmployeeByID(employeeId);

getAllCompanies();
getAllEmployees();

getEmployeesByCompany(companyId1);