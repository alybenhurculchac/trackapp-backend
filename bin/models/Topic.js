const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TopicSchema = new Schema({
    title: String,
    course_id: {
    type: Schema.Types.ObjectId,
    ref: "Course"
  }
});

var Topic = mongoose.model("Topic", TopicSchema);
module.exports = Topic;