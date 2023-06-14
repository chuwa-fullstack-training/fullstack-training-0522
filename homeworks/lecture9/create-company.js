const mongoose = require('./connect');
const { Company, Employee } = require('./schema');

/**
 * Create a new user
 */





const employee = new Employee({
    firstName:"first",
    lastName:"last",
    jobTitle:"sde",
    resigned:true,
    salary:1000
});

const company = new Company({
    name: 'Aaron',
    description: 'Zhang',
    headquarters: 'abc@gmail.com',
    industry:'sde',
    employees:employee._id
  });

company
  .save()
  .then(() => {
    console.log('User saved');
  })
  .catch(err => {
    console.log('Error saving user', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });