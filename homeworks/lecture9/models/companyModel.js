const mongoose = require('mongoose');
const { Schema } = mongoose;
const companySchema = new Schema({
    name: { type: String, required: [true, "Please enter a company name."] },
    description: { type: String, required: true },
    headquarters: { type: String, required: true },
    industry: { type: String, required: true },
    employees: [{ type: Schema.Types.ObjectId, ref: 'Employee'}],
}, { timestamps: true });

// create a model from that schema
const Company = mongoose.model("Company", companySchema);

module.exports = Company;