const mongoose = require('mongoose');
const { Schema } = mongoose;
const employeeSchema = new Schema({
    firstName: { type: String, required: [true, "Please enter a first name."] },
    lastName: { type: String, required: [true, "Please enter a last name."] },
    company: { type: Schema.Types.ObjectId, ref: 'Company' },
    startDate: { type: Date, required: true },
    jobTitle: { type: String, required: true },
    resigned: { type: String, required: true },
    salary: { type: Number, required: true },
    manager: { type: Schema.Types.ObjectId, ref: 'Employee' },
}, { timestamps: true });

// create a model from that schema
const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;