const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
      name: {
            type: String,
            required: true
      },
      description: {
            type: String,
            required: true,
            default: "There's no description."
      },
      headquarters: {
            type: String,
            required: true,
            default: 'NaN'
      },
      industry: String,
      employees: [
            {
                  type: Schema.Types.ObjectId,
                  ref: 'Employee'
            }
      ]
}, { collection: 'companies' });

const employeeSchema = new Schema({
      firstName: {
            type: String,
            required: true
      },
      lastName: {
            type: String,
            required: true
      },
      company: {
            type: Schema.Types.ObjectId,
            ref: 'Company',
      },
      startDate: {
            type: Date,
            default: Date.now
      },
      jobTitle: {
            type: String
      },
      resigned: {
            type: Boolean,
            default: false,
            required: true
      },
      salary: {
            type: Number,
            required: true
      },
      manager: {
            type: Schema.Types.ObjectId,
            ref: 'Employee',
            required: false
      }
}, { collection: 'employees' });

const Company = mongoose.model('Company', companySchema);
const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
      Company,
      Employee
}