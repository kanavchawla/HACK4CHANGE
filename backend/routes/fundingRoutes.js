const express = require("express");
const Funding = require("../models/funding"); // Adjust the path as necessary
const router = express.Router();

// POST: Create a new funding request
router.post("/funding", async (req, res) => {
  const { title, amount, description } = req.body;

  try {
    const newFundingRequest = new Funding({
      title,
      amount,
      description,
    });

    const savedRequest = await newFundingRequest.save();
    res.status(201).json(savedRequest);
  } catch (error) {
    console.error("Error saving funding request:", error);
    res.status(500).json({ message: "Error saving funding request" });
  }
});

// GET: Retrieve all funding requests
router.get("/funding", async (req, res) => {
  try {
    const fundingRequests = await Funding.find();
    res.status(200).json(fundingRequests);
  } catch (error) {
    console.error("Error retrieving funding requests:", error);
    res.status(500).json({ message: "Error retrieving funding requests" });
  }
});

module.exports = router;
