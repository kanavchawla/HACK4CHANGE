const mongoose = require("mongoose");

const ContributionSchema = new mongoose.Schema({
  amount: {
    type: Number,
    required: true,
  },
  contributor: {
    type: String,
    default: "Anonymous",
  },
  email: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const FundingRequestSchema = new mongoose.Schema({
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
  contributions: [ContributionSchema],
});

module.exports = mongoose.model("FundingRequest", FundingRequestSchema);
