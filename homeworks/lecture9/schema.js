const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
    },
    headquarters: {
      type: String,
    },
    industry: {
      type: String
    },
    employees: {
      type: Schema.Types.ObjectId,
      ref: 'employee'
    }
  });
  
  const employeeSchema = new Schema({
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: 'company'
    },
    startDate: {
      type: Date,
      default: Date.now
    },
    jobTitle: {
        type: String
      },
      resigned:{
        type: Boolean
      },
      salary:{
        type:Number
      },
      manager:{
        type: Schema.Types.ObjectId,
        ref: 'employee'
      }

  });

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
    Company,
    Employee
};