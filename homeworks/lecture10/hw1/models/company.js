const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'default content'
  },
  headquarters: {
    type: String,
    default: 'default content'
  },
  industry: {
    type: String,
    default: 'default content'
  },
  employees: [
    {
          type: Schema.Types.ObjectId,
          ref: 'Employee'
    }
  ]
});


const Company = mongoose.model('Company', companySchema);

module.exports = {
  Company,
};