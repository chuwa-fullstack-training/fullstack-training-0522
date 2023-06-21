const mongoose = require('mongoose');
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  jobTitle: {
    type: String,
    default: 'default content'
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  resigned: {
    type: Boolean
  },
  salary: {
    type: Number
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: 'Company'
  }
});

const companySchema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  headquarters: {
    type: String
  },
  industry: {
    type: String
  },
  employees: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
    }
  ]
});

const Employee = mongoose.model('Employee', employeeSchema);
const Company = mongoose.model('Company', companySchema);

module.exports = {
  Employee,
  Company
};
