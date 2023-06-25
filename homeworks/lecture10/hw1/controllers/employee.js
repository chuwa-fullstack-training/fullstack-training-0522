const Employee = require('../models/Employee');
const Company = require('../models/Company');

const createEmployee = async (req, res)=> {
    console.log(req.body);
    try{
        const company = await Company.findById(req.body?.company);
        const employee = new Employee ({
            firstName : req.body.firstName ?? '',
            lastName : req.body.lastName ?? '',
            company: company ?? null,
            startDate: req.body.startDate,
            jobTitle: req.body.jobTitle ?? '',
            resigned: req.body.resigned ?? true,
            salary: req.body.salary ?? 0
        })
        await employee.save();

        company._employees.push(employee);
        await company.save();

        res.status(201).json({ message: 'Employee created' });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getOneEmployee = async (req, res) => {
    console.log("employee id: "+ req.params.id);
    try{
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllEmployees = async (req, res) => {
    try{
        const employee = await Employee.find();
        res.status(200).json(employee);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateEmployee = async (req, res) => {
    console.log("employee id: "+ req.params.id);
    try{
        let employee = await Employee.findById(req.params?.id);
        const current_company = await Company.findById(req.body.company);
        const prev_company =  await Company.findByIdAndUpdate(employee.company, 
            {$pull : {_employees : req.params.id}}, 
            { useFindAndModify: false });
        console.log("prev company:" + prev_company.name);
        
        
        employee = {
            firstName: req.body.firstName?? employee.firstName,
            lastName: req.body.lastName ?? employee.lastName,
            company : current_company ?? prev_company,
            startDate : req.body.startDate ?? employee.startDate,
            jobTitle : req.body.jobTitle ?? employee.jobTitle,
            resigned : req.body.resigned ?? employee.resigned,
            salary : req.body.salary ?? employee.salary
        };
        console.log("cur company:" + employee.company.name);
        Employee.findByIdAndUpdate(req.params.id, employee,  { new: true });
    
        await Company.findByIdAndUpdate(req.body.company, {$push : {_employees : req.params.id} });
        res.json(employee);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const deleteEmployee = async (req, res) => {
    console.log("employee id: "+ req.params.id);
    try{
        const employee = await Employee.findById(req.params?.id);
        const prev_company =  await Company.findByIdAndUpdate(employee.company, 
            {$pull : {_employees : req.params.id}}, 
            { useFindAndModify: false });
        console.log("prev company:" + prev_company.name);

        await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Employee deleted' });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    getAllEmployees,
    getOneEmployee,
    createEmployee,
    updateEmployee,
    deleteEmployee
  };