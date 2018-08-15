const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  owners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Plant', plantSchema);
