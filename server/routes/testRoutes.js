const express = require("express");
const router = express.Router();
const Test = require("../models/Test");

// CREATE – הוספת הודעה
router.post("/", async (req, res) => {
  try {
    const newTest = new Test({
      message: req.body.message
    });

    const savedTest = await newTest.save();
    res.status(201).json(savedTest);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const tests = await Test.find();
    res.json(tests);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
