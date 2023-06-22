const Company = require("../models/Companies");
const Employee = require("../models/Employees");

const getAllCompanies = async (req, res, next) => {
  try {
    const companies = await Company.find();
    res.json(companies);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const getCompanyById = async (req, res, next) => {
  try {
    console.log("req: ", req.params);
    const companyId = req.params?.id;
    console.log("companyId: ", companyId);
    const company = await Company.findById(companyId);
    console.log("company: ", company);
    res.json(company);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createCompany = (req, res, next) => {
  try {
    const company = new Company({
      name: req.body.name,
      description: req.body.description,
      headquarters: req.body.headquarters,
      industry: req.body.industry,
    });
    company
      .save()
      .then(() => {
        console.log("company saved");
        res.send("company saved");
      })
      .catch((err) => {
        console.log("Error saving company", err);
      });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const updateCompanyById = (req, res, next) => {
  const ID = req.params.id;
//   console.log("update company id:", ID);
  let update = {};
  if (req.body.name) update.name = req.body.name;
  if (req.body.description) update.description = req.body.description;
  if (req.body.headquarters) update.headquarters = req.body.headquarters;
  if (req.body.industry) update.industry = req.body.industry;
  Company.findByIdAndUpdate(ID, update)
    .then(() => {
      res.send("company updated");
      console.log("company updated");
    })
    .catch((err) => {
      console.log("Error updating company", err);
    });
};

const deleteCompanyById = (req, res, next) => {
  const ID = req.params.id;
  console.log(ID);
  Company.findByIdAndDelete(ID)
    .then((deletedCompany) => {
      res.send("company deleted");
      console.log("company deleted", deletedCompany);
    })
    .catch((err) => {
      console.log("Error deleting company", err);
    });
};

const getAllEmployeesOfCompany = async (req, res, next) => {
  try {
    const companyId = req.params?.id;
    const company = await Company.findById(companyId);
    const employeesOfCompanyPromises = company.employees.map((each) =>
      Employee.findById(each)
    );
    const employeesOfCompany = await Promise.all(employeesOfCompanyPromises);
    res.json(employeesOfCompany);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports = {
  getAllCompanies,
  getCompanyById,
  createCompany,
  updateCompanyById,
  deleteCompanyById,
  getAllEmployeesOfCompany,
};
