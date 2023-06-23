const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');
require('dotenv').config();

const { Employee, Company } = require('./schema');


mongoose
  .connect('mongodb+srv://q969449115:102734@cluster0.wszbqdc.mongodb.net/', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.log('Error connecting to MongoDB', err);
  });

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const employeeRouter = express.Router();
const companyRouter = express.Router();

//create a company
companyRouter.post('/companies', async (req, res) => {
    console.log(req.body);
    try{
        const company = new Company ({
            name : req.body.name ?? '',
            description : req.body.description ?? '',
            headquarters : req.body.headquarters ?? '',
            industry : req.body.industry ?? '',
            _employees : req.body._employees ?? []
        });

        await company.save();
        res.status(201).json({ message: 'Company created' });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
/**
 * test:
 * localhost:3000/api/companies
 * {
  "name": "n1",
  "description" : "d1",
  "headquarters" : "h1",
  "industry" : "in1"
}
 */

//get a company
companyRouter.get('/companies/:id', async (req, res) => {
    console.log("company id: "+ req.params.id);
    try{
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
//test: localhost:3000/api/companies/6495598d8e1cbbd539719576

//get all companies
companyRouter.get('/companies', async (req, res)=>{
   
    try{
        const company = await Company.find();
        res.status(200).json(company);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
//test: localhost:3000/api/companies

//update a company
companyRouter.put('/companies/:id', async (req, res) => {
    console.log("company id: "+ req.params.id);

    try{
        const company = await Company.findById(req.params?.id);

        company.name = req.body.name ?? company.name;
        company.description = req.body.description ?? company.description;
        company.headquarters = req.body.headquarters ?? company.headquarters;
        company.industry = req.body.industry ?? company.industry;
        company._employees = req.body._employees ?? company._employees;

        await company.save();
        res.json(company);
        
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
/**
 * test: localhost:3000/api/companies/6495598d8e1cbbd539719576
 * {
  "name": "n1u",
  "description" : "d1u",
  "headquarters" : "h1u",
  "industry" : "in1u"
}
 */

//delete a company
companyRouter.delete('/companies/:id', async (req, res) => {
    console.log("company id: "+ req.params.id);

    try{
        const company = await Company.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Company deleted' });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
//test: localhost:3000/api/companies/649562244cfb205834e48989(not existed)

////////////////////////////////////////////////////////////////////////////user

//create an employee
employeeRouter.post('/employees', async (req, res)=> {
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
});
/**
 * test: localhost:3000/api/employees
 * {
    "firstName" : "ef1",
    "lastName" : "el1",
    "company":  "64955d1d2f871bca07e04245",
    "jobTitle": "ejt1",
    "resigned": 1,
    "salary": 0
}
 */

//get an employee
employeeRouter.get('/employees/:id', async (req, res) => {
    console.log("employee id: "+ req.params.id);
    try{
        const employee = await Employee.findById(req.params?.id);
        res.status(200).json(employee);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
//test: localhost:3000/api/employees/649575496ab4517071564f6b

//get all employees
employeeRouter.get('/employees', async (req, res) => {
    try{
        const employee = await Employee.find();
        res.status(200).json(employee);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
//test: localhost:3000/api/employees

//update an employee
employeeRouter.put('/employees/:id', async (req, res) => {
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
});
/**
 * test: localhost:3000/api/employees/649575496ab4517071564f6b
 * {
  "firstName" : "ef1u",
    "lastName" : "el1u",
    "company":  "6495598d8e1cbbd539719576",
    "jobTitle": "ejt1u",
    "resigned": false,
    "salary": 1000
}
 */

//delete an employee
employeeRouter.delete('/employees/:id', async (req, res) => {
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
});
//test: localhost:3000/api/employees/64958930c9cfe07f41747ae2(not exist)

//get all employees from a company
companyRouter.get('/companies/:id/employees', async (req, res) => {
    try{
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company._employees);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
});
//test: localhost:3000/api/companies/6495598d8e1cbbd539719576/employees

app.use('/api', employeeRouter);
app.use('/api', companyRouter);

app.listen(PORT, function(){
    console.log('App listening on port 3000!');
 });