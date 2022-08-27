const moongose = require("mongoose");

const Schema = moongose.Schema;

const PeriodSchema = new Schema({

    number: String
});

var Period = moongose.model("Period", PeriodSchema);

module.exports = Period;