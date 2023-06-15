const mongoose = require('./connect');
const { Employee } = require('./schema');

const getAllCompanies = () => {
      Company.find()
            .then((companies) => {
                  console.log(companies);
            })
            .catch(err => {
                  console.error('Error finding all companies ', err);
            })
            .finally(() => {
                  mongoose.disconnect();
            })
}

module.exports = getAllCompanies;