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
    type: String
  },
  resigned: {
    type: Boolean,
    required: true
  },
  salary: {
    type: Number,
    required: true
  },

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = {
  Employee
};