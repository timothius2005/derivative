const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const sessionSchema = new Schema({
    ProgramName: {type: String},
    WorkoutDay: {type: String},
    Exercises: {type: Array},
}, {
    timestamps: true,
});

const Session = mongoose.model('Session', sessionSchema);

module.exports = Session;