const mongoose = require("mongoose");

const fundingSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Funding = mongoose.model("Funding", fundingSchema);

module.exports = Funding;
