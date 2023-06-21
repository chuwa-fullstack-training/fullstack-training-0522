const { Employee, Company } = require('./schema');

module.exports = {
  getCompanyById: async (req, res, next) => {
    try {
      console.log("req: ", req.query);
      const companyId = req.query?.companyId;
      console.log("companyId: ", companyId);
      const company = await Company.findById(companyId);
      console.log("company: ", company);
      res.json(company);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  },
  getEmployeeById: async (req, res, next) => {
    try {
      const employeeId = req.query?.employeeId;
      const employee = await Employee.findById(employeeId);
      res.json(employee);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }
};
