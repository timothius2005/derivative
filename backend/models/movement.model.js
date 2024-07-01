const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movementSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    label: {type: String},
    movements: {type: String},
    Equipment: {type: String},
    EquipMod1: {type: String},
    EquipMod2:{type: String},
    EquipMod3:{type: String},
    Grip: {type: String},
    GripMod: {type: String},
    Stance: {type: String},
    StanceMod: {type: String},
    StanceMod2: {type: String},
    position: {type: String},
    MoveMod1: {type: String},
    Measures: {type: String},
    'Body Part': {type: String},
    'Primary Muscle': {type: String},
    Derivative: {type: String},
});

const Movement = mongoose.model('Movement', movementSchema);

module.exports = Movement;