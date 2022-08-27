const moongose = require("mongoose");

const Schema = moongose.Schema;

const SubtopicSchema = new Schema({
    title: String,
    description: String,
    topic_id: Schema.Types.ObjectId,
    period_id: Schema.Types.ObjectId
});

var Subtopic = moongose.model("Subtopic", SubtopicSchema);

module.exports = Subtopic;