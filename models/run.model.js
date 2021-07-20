const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const RunSchema = new Schema({
    runID: { type: String, required: true },
    status: { type: String, required: true },
})
module.exports = mongoose.model("Run", RunSchema);