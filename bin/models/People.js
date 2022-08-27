const moongose = require("mongoose");

const Schema = moongose.Schema;

const PeopleSchema = new Schema({

    name: String,
    last_name: String,
    gender: String
});

var People = moongose.model("People", PeopleSchema);

module.exports = People;