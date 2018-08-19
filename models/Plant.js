const mongoose = require('mongoose');

const plantSchema = new mongoose.Schema({
  name: String,
  type: String,
  imageUrl: String,
  preferences: {
    // Hours between watering
    waterFrequency: Number,
    // Days between fertilization
    fertilizerFrequency: Number,
    sunlightAmount: {
      type: String,
      default: 'full'
    },
    notes: String
  },
  history: {
    water: [Number],
    fertilizer: [Number]
  },
  owners: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }]
});

module.exports = mongoose.model('Plant', plantSchema);
