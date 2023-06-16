const Employee = require('../models/employee');
const Company = require('../models/company');

// POST /employees
const createNewEmployee = async (req, res) => {
      try {
            const employeeData = req.body;
            const employee = new Employee(employeeData);
            await employee.save();
            await Company.findByIdAndUpdate(
                  employee.company,
                  { $push: { employees: employee._id } }
            );
            res.status(201).json({ message: `New employee '${employee.firstName} ${employee.lastName}' created !!` })
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Create new employee failed !!' });
      }
}
// GET /employees/:id
const getEmployeeById = async (req, res) => {
      try {
            const employeeID = req.params?.id;
            const employee = await Employee.findById(employeeID);
            res.status(200).json(employee);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Get employee by id failed !!' });
      }
};

// GET /employees/company/:id
const getEmployeesByCompany = async (req, res) => {
      try {
            const companyID = req.params?.id;
            const company = await Company.findById(companyID);
            const employees = [];
            for (let employeeID of company.employees) {
                  const employee = await Employee.findById(employeeID)
                  employees.push(employee);
            }
            res.status(200).json(employees);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Get employee by company failed !!' });
      }
}

// GET /employees
const getAllEmployees = async (req, res) => {
      try {
            const employees = await Employee.find();
            res.status(200).json(employees);
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Get all employees failed !!' });
      }
}

// PUT /employees/:id
const updateEmployeeByID = async (req, res) => {
      try {
            const employeeID = req.params?.id;
            const newData = req.body;
            const employee = await Employee.findById(employeeID);

            // Update Company's employees array
            if ('company' in newData && newData.company !== employee.company) {
                  const old_companyID = employee.company;
                  const new_companyID = newData.company;

                  // DELETE from old company
                  await Company.findByIdAndUpdate(
                        old_companyID,
                        { $pull: { employees: employeeID } }
                  );

                  // ADD into new company
                  await Company.findByIdAndUpdate(
                        new_companyID,
                        { $push: { employees: employeeID } }
                  );
            }
            await Employee.findByIdAndUpdate(employeeID, newData);
            res.status(202).json({ message: 'Employee updated !!' });
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Update employee by id failed !!' });
      }
}

// DELETE /employees/:id
const deleteEmployeeID = async (req, res) => {
      try {
            const employeeID = req.params?.id;
            const employee = await Employee.findById(employeeID);

            // delete from company's employees
            await Company.findByIdAndUpdate(
                  employee.company,
                  { $pull: { employees: employeeID } },
                  { useFindAndModify: false }
            );

            await Employee.findByIdAndDelete(employeeID);
            res.status(200).json({ message: `Employee deleted !!` });
      } catch (err) {
            console.error(err.message);
            res.status(500).json({ ERROR: 'Delete employee by id failed !!' });
      }
}

module.exports = {
      createNewEmployee,
      getEmployeeById,
      getEmployeesByCompany,
      getAllEmployees,
      updateEmployeeByID,
      deleteEmployeeID
}