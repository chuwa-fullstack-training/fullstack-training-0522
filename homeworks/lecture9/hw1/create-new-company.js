const mongoose = require('./connect');
const { Company } = require('./schema');

const createNewCompany = (companyData) => {
      const company = new Company(companyData);

      company
            .save()
            .then(com => {
                  console.log(`New company '${com.name}' saved!`);
            })
            .catch(err => {
                  console.log('Error in creating a company', err);
            })
            .finally(() => {
                  mongoose.disconnect();
            })
}

module.exports = createNewCompany;