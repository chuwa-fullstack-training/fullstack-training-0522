
const Company = require('../models/Company');


const getAllCompany = async (req, res) => {
    try {
      const users = await Company.find();
      res.status(200).json(users);
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ message: 'Server Error' });
    }
  };

  const getOneCompany = async (req, res) => {
    try {
      const user = await Company.findById(req.params?.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json({ message: 'Server Error' });
    }
  };


  const deleteOneCompany = async (req, res) => {
    try {
      await Company.findByIdAndDelete(req.params?.id);
      res.status(204).json({ message: 'User deleted' });
    } catch (err) {
      res.status(500).json({ message: 'Server Error' })
    }
  };



module.exports = {
    getAllCompany,
    getOneCompany,
    deleteOneCompany
  };