const moongose = require("mongoose");

const Schema = moongose.Schema;

const StudentSchema = new Schema({
    status: String,
    people_id: Schema.Types.ObjectId
});

var Student = moongose.model("Student", StudentSchema);

module.exports = Student;