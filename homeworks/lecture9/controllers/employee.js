const express = require("express");
const app = express();
const Employee = require("../models/employeeModel");
app.use(express.json());

// create a new employee
app.post("/employee", async(req, res) => {
    try {
        const employee = await Employee.create(req.body);
        res.status(200).json(employee);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
});

// get an employee by id
app.get('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update an employee by id
app.put('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // return the updated employee
        )
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete an employee by id
app.delete('/employee/:id', async (req, res) => {
    try {
        const employee = await Employee.findByIdAndDelete(req.params.id);
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get all employees
app.get("/employees", async(req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get all employees of a company
app.get("/employees/:companyId", async(req, res) => {
    try {
        const employees = await Employee.find({company: req.params.companyId});
        res.status(200).json(employees);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;