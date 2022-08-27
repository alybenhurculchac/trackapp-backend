const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WebmasterSchema = new Schema({
    user: String,
    password: String
});

var Webmaster = mongoose.model("Webmaster", WebmasterSchema);

module.exports = Webmaster;