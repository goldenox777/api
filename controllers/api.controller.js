const Entry = require("../models/entry.model");
const Run = require("../models/run.model");

exports.entry_create = (req, res, next) => {
    const entry = new Entry({
        runID: req.body.runID,
        title: req.body.title,
        status: req.body.status,
        duration: req.body.duration,
        date: req.body.date,
        err: req.body.err
    });

    entry.save((err) => {
        if (err) {
            return next(err);
        }
        res.send("Entry created successfully!");
    });
};

exports.run_create = (req, res, next) => {
    const run = new Run({
        runID: req.body.runID,
        status: req.body.status
    });

    run.save((err) => {
        if (err) {
            return next(err);
        }
        res.send("Run created successfully!");
    });
};

exports.entry_details = (req, res) => {
    Entry.findById(req.params.id, (err, entry) => {
        if (err) return next(err);
        res.send(entry);
    });
};

exports.all_entries = (req, res) => {
    Entry.find({}, (err, entry) => {
        if (err) return next(err);
        res.json(entry);
    });
};

exports.filter = (req, res) => {
    // console.log(req.params)
    Entry.find(JSON.parse(req.params.filter), (err, entry) => {
        if (err) return next(err);
        res.json(entry);
    });
};


exports.entry_update = (req, res) => {
    Entry.findByIdAndUpdate(req.params.id, { $set: req.body }, (err, entry) => {
        if (err) return next(err);
        res.send("Entry Udpated.");
    });
};

exports.entry_delete = (req, res) => {
    Entry.findByIdAndRemove(req.params.id, (err) => {
        if (err) return next(err);
        res.send("Entry Deleted");
    });
};