const mongoose = require('./connect');
const { Company } = require('./schema');

const updateCompanyByID = (companyID, newData) => {
      Company.findByIdAndUpdate(companyID, newData)
            .then(() => {
                  console.log(`Company updated!`);
            })
            .catch(err => {
                  console.log('Error updating company', err)
            })
            .finally(() => {
                  mongoose.disconnect();
            })
}

module.exports = updateCompanyByID;