const moongose = require("mongoose");

const Schema = moongose.Schema;

const GradeSchema = new Schema({
    nomenclature: String,
    courses: Array
});

var Grade = moongose.model("Grade", GradeSchema);

module.exports = Grade;