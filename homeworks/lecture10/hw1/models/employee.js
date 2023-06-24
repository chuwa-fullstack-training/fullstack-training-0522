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
      company: {
            type: Schema.Types.ObjectId,
            ref: 'Company',
      },
      startDate: {
            type: Date,
            default: Date.now
      },
      jobTitle: {
            type: String,
            default: ''
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

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;