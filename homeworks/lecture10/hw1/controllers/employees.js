const Company = require("../models/Companies");
const Employee = require("../models/Employees");

const getAllEmployees = async (req, res, next) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getEmployeeById = async (req, res, next) => {
  try {
    const employeeId = req.params?.id;
    const employee = await Employee.findById(employeeId);
    res.json(employee);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createEmployee = async (req, res, next) => {
  try {
    const company = await Company.findById(req.body.company);
    const employee = new Employee({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      jobTitle: req.body.jobTitle,
      resigned: Boolean(req.body.resigned),
      salary: Number(req.body.salary),
      company: company,
    });
    employee
      .save()
      .then(() => {
        company.employees.push(employee); // push will return newest length of array
        return company.save();
      })
      .then(() => {
        console.log("employee saved");
        res.send("employee saved");
      })
      .catch((err) => {
        console.log("Error saving employee", err);
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateEmployeeById = (req, res, next) => {
  const ID = req.params.id;
  let update = {};
  if (req.body.firstName) update.firstName = req.body.firstName;
  if (req.body.lastName) update.lastName = req.body.lastName;
  if (req.body.startDate) update.startDate = new Date(req.body.startDate);
  if (req.body.jobTitle) update.jobTitle = req.body.jobTitle;
  if (req.body.resigned) update.resigned = Boolean(req.body.resigned);
  if (req.body.salary) update.salary = Number(req.body.salary);
  console.log("jobTitle: ", req.body.jobTitle);
  console.log("update: ", update);
  Employee.findByIdAndUpdate(ID, update)
    .then(() => {
      res.send("employee updated");
      console.log("employee updated");
    })
    .catch((err) => {
      console.log("Error updating employee", err);
    });
};

const deleteEmployeeById = async (req, res, next) => {
  const ID = req.params.id;
  const employee = await Employee.findById(ID);

// using filter to delete from employees array
  // let company = await Company.findOne({ _id: employee.company });
  // const deletedEmployees = company.employees.filter(each => !each.equals(employee._id));
  // await Company.findByIdAndUpdate(employee.company, { employees: deletedEmployees });

// using $pull method to delete from employees array
  await Company.findByIdAndUpdate(employee.company, {
    $pull: { employees: employee._id },
  });

  Employee.findByIdAndDelete(ID)
    .then((deletedEmployee) => {
      res.send("employee deleted");
      console.log("employee deleted: ", deletedEmployee);
    })
    .catch((err) => {
      console.log("Error deleting employee", err);
    });
};

module.exports = {
  getAllEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployeeById,
  deleteEmployeeById,
};
