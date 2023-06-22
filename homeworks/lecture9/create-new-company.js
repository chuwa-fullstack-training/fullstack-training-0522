const mongoose = require('./connect');
const { Company } = require('./schema');


const company = new Company({ 
  name: 'Apple', 
  description: 'Tech Company', 
  headquarters: 'Cupertino',
  industry: 'Making Tech Products'
});

company.save()
  .then(company => {
        console.log(`New company saved!`);
  })
  .catch(err => {
    console.log('Error saving company', err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
