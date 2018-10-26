const express = require("express");
const router = express.Router();

// Item model
const Entry = require("../../models/Entry");

// @route   GET api/artists
// @desc    Get All entries
// @access  Public
router.get("/", (req, res) => {
    Entry.find()
        .sort({ date: -1 })
        .then(entries => res.json(entries));
});

// @route   POST api/artists
// @desc    Create an entry
// @access  Public
router.post("/", (req, res) => {
    console.log(req);
    const newEntry = new Entry({
        name: req.body.name,
        occurance: req.body.occurance
    });

    newEntry.save().then(entry => res.json(entry));
});

// @route   DELETE api/artists
// @desc    Delete an entry
// @access  Public
router.delete("/:id", (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
