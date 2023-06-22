const mongoose = require('./connect');
const { Company } = require('./schema');


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

