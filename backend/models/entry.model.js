const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const entrySchema = new Schema({
    exerciseName: {type: String},
    repititions: {type: String},
    resistance: {type: String},
}, {
    timestamps: true,
});

const Entry = mongoose.model('Entry', entrySchema);

module.exports = Entry;