const express = require("express");
const app = express();
app.use(express.json());
const Company = require("../models/companyModel");

// create a new company
app.post("/company", async(req, res) => {
    try {
        const company = await Company.create(req.body);
        res.status(200).json(company);
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: error.message });
    }
})

// get a company by id
app.get('/company/:id', async (req, res) => {
    try {
        const company = await Company.findById(req.params.id);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Update a company by id
app.put('/company/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true } // return the updated company
        )
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Delete a company by id
app.delete('/company/:id', async (req, res) => {
    try {
        const company = await Company.findByIdAndDelete(req.params.id);
        res.status(200).json(company);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// get all companies
app.get("/companies", async(req, res) => {
    try {
        const companies = await Company.find();
        res.status(200).json(companies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = app;