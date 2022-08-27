const moongose = require("mongoose");

const Schema = moongose.Schema;

const ExerciseSchema = new Schema({
    title: String,
    description: String,
    subtopic_id: Schema.Types.ObjectId
});

var Exercise = moongose.model("Exercise", ExerciseSchema);

module.exports = Exercise;