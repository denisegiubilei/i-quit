const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  dateCreation: {
    type: Date,
    default: Date.now
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  date: { type: Date },
  packsPerWeek: { type: Number },
  pricePerPack: { type: Number }
});

module.exports = mongoose.model("Profile", ProfileSchema);
