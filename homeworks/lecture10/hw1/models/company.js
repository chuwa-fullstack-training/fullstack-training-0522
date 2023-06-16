const mongoose = require('mongoose');
const { Schema } = mongoose;

const companySchema = new Schema({
      name: {
            type: String,
            required: true
      },
      description: {
            type: String,
            default: "There's no description."
      },
      headquarters: {
            type: String,
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

const Company = mongoose.model('Company', companySchema);

module.exports = Company;