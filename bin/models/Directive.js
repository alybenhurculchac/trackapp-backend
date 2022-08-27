const moongose = require("mongoose");

const Schema = moongose.Schema;

const DirectiveSchema = new Schema({
    people_id: Schema.Types.ObjectId
});

var Directive = moongose.model("Directive", DirectiveSchema);

module.exports = Directive;