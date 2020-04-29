const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

// @route   GET /api/contact
// @desc    Get data
router.get("/", (req, res) => {
  res.send("Get the view");
});

// @route   POST /api/contact
// @desc    Send data
router.post("/", (req, res) => {
  res.send("Insert data and send");
});

module.exports = router;
