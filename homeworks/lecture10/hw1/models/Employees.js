const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  jobTitle: {
    type: String,
    default: "default content",
  },
  startDate: {
    type: Date,
    default: Date.now,
  },
  resigned: {
    type: Boolean,
  },
  salary: {
    type: Number,
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
  },
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = Employee;