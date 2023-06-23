const mongoose = require('mongoose');
const { Schema } = mongoose;

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
        ref: 'Company'
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    jobTitle: {
        type: String
    },
    resigned: {
        type: Boolean
    },
    salary: {
        type: Number
    }
    
  });

  const companySchema = new Schema ({
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
    _employees: [{
      type: Schema.Types.ObjectId,
      ref: "Employee"}]
    
  });

    const Employee = mongoose.model('Employee', employeeSchema);
    const Company = mongoose.model("Company",companySchema);

    module.exports = {
        Employee, Company
    };