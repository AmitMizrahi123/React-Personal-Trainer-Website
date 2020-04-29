const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Contact = require("../models/Contact");

// @route   GET /api/contact
// @desc    Get data
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/contact
// @desc    Send data
router.post(
  "/",
  check("name", "Name is required").not().isEmpty(),
  check("email", "Email is required").not().isEmpty(),
  check("comment", "Comment is required").not().isEmpty(),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, comment } = req.body;

    try {
      const newContact = new Contact({
        name,
        email,
        comment,
        phone,
      });

      const contact = await newContact.save();

      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

module.exports = router;
