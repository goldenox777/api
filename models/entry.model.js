const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const EntrySchema = new Schema({
    runID: { type: String, required: true },
    title: { type: String, required: true },
    status: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Number, required: true },
    err: { type: Schema.Types.Mixed, required: true }
});
module.exports = mongoose.model("Entry", EntrySchema);