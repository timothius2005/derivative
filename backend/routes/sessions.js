const router = require('express').Router();
const { model } = require('mongoose');
let Entry = require('../models/session.model');

router.get('/', (req, res, next) => {
    Entry.find()
        .then(sessions => res.json(sessions))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const programName = req.body.programName;
    const workoutDay = req.body.workoutDay;
    const exercises = req.body.exercises;

    const newEntry = new Entry({programName, workoutDay, exercises});

    newEntry.save()
        .then(() => res.json('Entry logged'))
        .catch(err => res.status(400).json('ya messed up! Error: ' + err));

});

module.exports = router;