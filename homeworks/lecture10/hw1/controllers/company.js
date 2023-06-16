const Company = require('../models/company');
const Employee = require('../models/employee');

// POST /companies
const createNewCompany = async (req, res) => {
      try {
            const companyData = req.body;
            const company = new Company(companyData);

            await company.save();
            res.status(201).json({ message: `Company '${companyData.name}' created !!` });
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Create new company failed !!' });
      }
};

// GET /companies/:id
const getCompanyById = async (req, res) => {
      try {
            const companyID = req.params?.id;
            const company = await Company.findById(companyID);
            res.status(200).json(company);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Get company by id failed !!' });
      }
};

// PUT /companies/:id
const updateCompanyByID = async (req, res) => {
      try {
            const companyID = req.params?.id;
            const newData = req.body;
            await Company.findByIdAndUpdate(companyID, newData);
            res.status(202).json({ message: `Company updated !!` });
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Update company by id failed !!' });
      }
};

// GET /companies
const getAllCompanies = async (req, res) => {
      try {
            const companies = await Company.find();
            res.status(200).json(companies);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Get all companies failed !!' });
      }
}

// DELETE /companies/:id
const deleteCompanyByID = async (req, res) => {
      try {
            const companyID = req.params?.id;
            const company = await Company.findById(companyID);

            for (let employeeID of company.employees) {
                  var employee = await Employee.findById(employeeID);
                  employee.company = null;
                  employee.jobTitle = null;
                  employee.resigned = true;
                  employee.salary = 0;
                  await employee.save();
            }

            const deleteResult = await Company.findByIdAndDelete(companyID);
            res.status(204).json({ message: `Company ${deleteResult.name} deleted !!` })
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Delete company by id failed !!' });
      }
}

module.exports = {
      createNewCompany,
      getCompanyById,
      updateCompanyByID,
      getAllCompanies,
      deleteCompanyByID,
}