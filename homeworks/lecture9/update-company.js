const mongoose = require('./connect');
const { Company } = require('./schema');

/**
 * Update a user
 */
const ID = new mongoose.Types.ObjectId('64942ba683572b1158759438');
Company.findByIdAndUpdate(ID, {
  description: 'Best Tech Company',
  headquarters: 'Los Angeles'
})
  .then(() => {
    console.log('Company updated');
  })
  .catch(err => {
    console.log('Error updating company', err);
  })
  .finally(() => {
    mongoose.disconnect();
  });