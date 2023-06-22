const mongoose = require('./connect');
const { Employee } = require('./schema');


const employee = new Employee({
  firstName: 'Robin',
  lastName: 'Li',
  company: '64942ba683572b1158759438',
  jobTitle: 'Software Engineer',
  salary: 100000,
  resigned: false
})

employee
  .save()
  .then(employee => {
        console.log(`New employee saved!`);
  })
  .catch(err => {
    console.log('Error saving company', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });