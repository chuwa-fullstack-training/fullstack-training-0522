// - Create a new employee
// - Get an employee by id
// - Update an employee by id
// - Delete an employee by id
// - Get all employees
// - Get all employees of a company
const { Employee } = require("../models/employeeSchema");
const { Company } = require("../models/companySchema");

const createEmployee = async (req, res) => {
  const employee = new Employee({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    company: req.body.company,
    startDate: req.body.startDate,
    jobTitle: req.body.jobTitle,
    resigned: req.body.resigned,
    salary: req.body.salary,
    manager: req.body.manager ?? null,
  });
  try {
    const savedEmployee = await employee.save();
    await updateCompanyWithEmployee(req.body.company, savedEmployee._id);
    res.status(200).json(savedEmployee);
  } catch (err) {
    res.status(404).json({ error: err });
  }
};

const getEmployeeById = (req, res) => {
  const id = req.params.id;
  Employee.findById(id)
    .then((employee) => res.status(200).json(employee))
    .catch((err) => console.log(err));
};

const getAllEmployees = (req, res) => {
  Employee.find()
    .then((employees) => res.status(200).json(employees))
    .catch((err) => console.log(err));
};

const updateEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    await Employee.findById(id).then(async (employee) => {
      deleteEmployeeFromCompany(employee.company, id);
    });
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    await updateCompanyWithEmployee(req.body.company, id);
    return res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ error: err });
  }
};

const deleteEmployee = async (req, res) => {
  const id = req.params.id;
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(id);
    await deleteEmployeeFromCompany(deletedEmployee.company, id);
    res.status(200).json(deletedEmployee);
  } catch (err) {
    throw err;
  }
};

const getCompanyEmployees = (req, res) => {
  const id = req.params.id;
  Employee.find({ company: id })
    .then((employees) => res.status(200).json(employees))
    .catch((err) => console.log(err));
};

const updateCompanyWithEmployee = async (companyId, employeeId) => {
  try {
    const company = await Company.findByIdAndUpdate(
      companyId,
      { $push: { employees: employeeId } },
      { new: true }
    );
    await company.save();
  } catch (err) {
    throw err;
  }
};
const deleteEmployeeFromCompany = async (companyId, employeeId) => {
  try {
    const company = await Company.findByIdAndUpdate(
      companyId,
      { $pull: { employees: employeeId } },
      { new: true }
    );
    await company.save();
  } catch (err) {
    throw err;
  }
};

module.exports = {
  createEmployee,
  getEmployeeById,
  getAllEmployees,
  updateEmployee,
  deleteEmployee,
  getCompanyEmployees,
};
