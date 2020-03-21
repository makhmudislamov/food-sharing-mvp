// models/Campaign.js

const mongoose = require("mongoose");

const Campaign = mongoose.model("Campaign", {
    title: String,
    description: String,
    amount: String
});

module.exports = Campaign;
