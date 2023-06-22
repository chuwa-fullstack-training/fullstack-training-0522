const mongoose = require('./connect');
const { Company } = require('./schema');

/**
 * Delete a user
 */
const ID = new mongoose.Types.ObjectId('64942ba683572b1158759438');
Company.findByIdAndDelete(ID)
  .then(res => {
    console.log('Company deleted', res);
  })
  .catch(err => {
    console.log('Error deleting company', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });