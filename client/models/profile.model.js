const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  date: { type: Date },
  packsPerWeek: { type: Number },
  pricePerPack: { type: Number },
  email: { type: String },
  password: {type: String}
});

module.exports = mongoose.model('Profile', ProfileSchema);