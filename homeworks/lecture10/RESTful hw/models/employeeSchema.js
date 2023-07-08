const mongoose = require("mongoose");
const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  company: { type: Schema.Types.ObjectId, ref: "Company", required: true },
  startDate: { type: Date, default: Date.now() },
  jobTitle: { type: String, required: true },
  resigned: { type: Boolean, required: true },
  salary: { type: Number, required: true },
  manager: { type: Schema.Types.ObjectId, ref: "Employee"},
});

const Employee = mongoose.model("Employee", employeeSchema);

module.exports = { Employee };