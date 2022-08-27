const moongose = require("mongoose");

const Schema = moongose.Schema;

const CourseSchema = new Schema({
    name: String
});

var Course = moongose.model("Course", CourseSchema);

module.exports = Course;