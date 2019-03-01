const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  day: { type: String },
  hour: { type: Number },
  packsPerDay: { type: Number },
  pricePerPack: { type: Number },
  cigsPerPack: { type: Number },
  currency: { type: String }
});

module.exports = mongoose.model('Profile', ProfileSchema);