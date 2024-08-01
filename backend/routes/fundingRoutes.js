const express = require("express");
const Funding = require("../models/funding");
const router = express.Router();

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

router.get("/funding", async (req, res) => {
  try {
    const fundingRequests = await Funding.find();
    res.status(200).json(fundingRequests);
  } catch (error) {
    console.error("Error retrieving funding requests:", error);
    res.status(500).json({ message: "Error retrieving funding requests" });
  }
});

router.get("/funding/:id", async (req, res) => {
  try {
    const request = await Funding.findById(req.params.id);
    if (!request)
      return res.status(404).json({ error: "Funding request not found" });
    res.status(200).json(request);
  } catch (error) {
    res.status(500).json({ error: "Error fetching funding request" });
  }
});

router.put("/funding/:id", async (req, res) => {
  try {
    const { amount, email, contactNumber } = req.body;
    const request = await Funding.findById(req.params.id);
    if (!request)
      return res.status(404).json({ error: "Funding request not found" });

    request.contributions.push({
      amount,
      email,
      contactNumber,
      contributor: "Anonymous",
    });
    await request.save();

    res.status(200).json(request);
  } catch (error) {
    res
      .status(500)
      .json({ error: "Error contributing to the funding request" });
  }
});

module.exports = router;
