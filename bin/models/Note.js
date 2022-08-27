const moongose = require("mongoose");

const Schema = moongose.Schema;

const NoteSchema = new Schema({
    value: Number,
    feedback: String,
    teacher_id: Schema.Types.ObjectId,
    student_id: Schema.Types.ObjectId,
    exercise_id: Schema.Types.ObjectId,
});

var Note = moongose.model("Note", NoteSchema);

module.exports = Note;