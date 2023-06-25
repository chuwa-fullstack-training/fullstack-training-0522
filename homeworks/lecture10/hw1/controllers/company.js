const Company = require('../models/Company');

const createCompany = async (req, res) => {
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
};

const getOneCompany = async (req, res) => {
    console.log("company id: "+ req.params.id);
    try{
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getAllCompanies = async (req, res)=>{
   
    try{
        const company = await Company.find();
        res.status(200).json(company);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const updateCompany = async (req, res) => {
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
};

const deleteCompany = async (req, res) => {
    console.log("company id: "+ req.params.id);

    try{
        const company = await Company.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Company deleted' });
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

const getEmployeesOfCompany = async (req, res) => {
    try{
        const company = await Company.findById(req.params?.id);
        res.status(200).json(company._employees);
    }
    catch(error){
        console.log(error.message);
        res.status(500).json({ message: 'Server Error' });
    }
};

module.exports = {
    createCompany,
    getAllCompanies,
    getOneCompany,
    updateCompany,
    deleteCompany,
    getEmployeesOfCompany
  };
  