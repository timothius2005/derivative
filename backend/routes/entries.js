const router = require('express').Router();
const { model } = require('mongoose');
let Entry = require('../models/entry.model');

router.get('/', (req, res, next) => {
    Entry.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const exerciseName = req.body.exerciseName;
    const repititions = req.body.repititions;
    const resistance = req.body.resistance;
    const date = req.body.date;

    const newEntry = new Entry({exerciseName, repititions, resistance, date});

    newEntry.save()
        .then(() => res.json('Entry logged'))
        .catch(err => res.status(400).json('ya messed up! Error: ' + err));

});

module.exports = router;