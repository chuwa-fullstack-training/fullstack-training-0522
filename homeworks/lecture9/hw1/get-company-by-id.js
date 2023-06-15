const mongoose = require('./connect');
const { Company } = require('./schema');

const getCompanyById = (id) => {
      Company.findById(new mongoose.Types.ObjectId(id))
            .then(company => {
                  console.log(company);
            })
            .catch(err => {
                  console.log('Error in getting company by ID', err);
            })
            .finally(() => {
                  mongoose.disconnect();
            });
};

module.exports = getCompanyById;