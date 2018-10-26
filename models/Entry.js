const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ArtistSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    occurance: {
        type: Number,
        required: true
    },
    update_date: {
        type: Date,
        default: Date.now
    }
});

module.exports = ArtistEntry = mongoose.model("Entry", ArtistSchema);
