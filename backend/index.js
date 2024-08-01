const express = require("express");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const app = express();
const { PythonShell } = require("python-shell");
const axios = require("axios");
const bodyParser = require("body-parser");
const https = require("https");
const path = require("path");
app.use(bodyParser.json());
const { exec } = require("child_process");

app.use(cors());
app.use(
  fileUpload({
    useTempFiles: true,
  })
);
app.use(express.json());
app.use("/api", require("./routes/lmsRoutes.js"));
app.use("/api", require("./routes/Auth.js"));
app.use("/api", require("./routes/detect.js"));

app.post("/predict", (req, res) => {
  const { company, amount, time } = req.body;

  if (!company || !amount || !time) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const script = `python predict.py ${company} ${amount} ${time}`;

  exec(script, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).json({ error: error.message });
    }
    if (stderr) {
      console.error(`Stderr: ${stderr}`);
      return res.status(500).json({ error: stderr });
    }
    try {
      res.json(JSON.parse(stdout));
    } catch (parseError) {
      console.error(`Parse Error: ${parseError.message}`);
      res.status(500).json({ error: "Failed to parse JSON output" });
    }
  });
});

const questionSchema = new mongoose.Schema({
  question: String,
  answers: [String],
});

const Question = mongoose.model("Question", questionSchema);

// API endpoints
app.post("/questions", async (req, res) => {
  try {
    const newQuestion = new Question(req.body);
    await newQuestion.save();
    res.status(201).send(newQuestion);
  } catch (error) {
    res.status(400).send(error);
  }
});

app.get("/questions", async (req, res) => {
  try {
    const questions = await Question.find();
    res.status(200).send(questions);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint to get a question by ID
app.get("/questions/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).send("Question not found");
    res.status(200).send(question);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Endpoint to update a question with a new answer
app.put("/questions/:id", async (req, res) => {
  try {
    const question = await Question.findById(req.params.id);
    if (!question) return res.status(404).send("Question not found");
    question.answers.push(req.body.answer);
    await question.save();

    res.status(200).send(question);
  } catch (error) {
    res.status(500).send(error);
  }
});
/////////////////////////////////////////////
app.use("/", require("./routes/fundingRoutes.js"));
/////////////////////////////////////////////
app.listen(5000, async () => {
  console.log("connected to port : " + 5000);
  try {
    await mongoose.connect(
      "mongodb+srv://kanavchawla04:wKj9z4SD78Hcs4Rp@cluster0.wu1zkzm.mongodb.net/",
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
    console.log("connected to mongodb");
  } catch (error) {
    console.log(error.message);
  }
});
