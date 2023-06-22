const mongoose = require('./connect');
const { Company } = require('./schema');

/**
 * Read a user by id
 */
const ID = new mongoose.Types.ObjectId('64942ba683572b1158759438');
Company.findById(ID)
  .then(company => {
    console.log(company);
  })
  .catch(err => {
    console.log('Error finding company', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });