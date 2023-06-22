const mongoose = require('mongoose');
const dbURI =
  'mongodb+srv://training:shangan@fullstack-training.gw3nkbl.mongodb.net/<database>';

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

module.exports = mongoose;
