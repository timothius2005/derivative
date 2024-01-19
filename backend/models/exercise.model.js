const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    exerciseName: {type: String, required: true},
    movement: {type: String},
    equipment: {type: Array},
    equipmentMod1: {type: Array},
    equipmentMod2:{type: Array},
    gripDirection: {type: Array},
    stance: {type: Array},
    position: {type: Array},
    positionMod1: {type: Array},
    positionMod2: {type: Array},
    postiionMod3: {type: Array},
    muscleGroup1: {type: Array},
    muscleGroup2: {type: Array},
}, {
    timestamps: true,
});

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;