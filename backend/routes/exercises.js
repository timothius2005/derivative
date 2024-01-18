const router = require('express').Router();
let Exercise = require('../models/exercise.model');

router.get('/exercises', (req, res, next) => {
    Exercise.find()
        .then(entries => res.json(entries))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const exerciseName = req.body.exerciseName;
    const movement = req.body.movement;
    const equipment = req.body.equipment;
    const equipmentMod1 = req.body.equipmentMod1;
    const equipmentMod2 = req.body.equipmentMod2;
    const gripDirection = req.body.gripDirection;
    const stance = req.body.stance;
    const position = req.body.position;
    const positionMod1 = req.body.positionMod1;
    const positionMod2 = req.body.positionMod2;
    const positionMod3 = req.body.positionMod3;
    const muscleGroup1 = req.body.muscleGroup1;
    const muscleGroup2 = req.body.muscleGroup2;

    const newExercise = new Exercise({  
        exerciseName,
        movement,
        equipment,
        equipmentMod1,
        equipmentMod2,
        gripDirection,
        stance,
        position,
        positionMod1,
        positionMod2,
        positionMod3,
        muscleGroup1,
        muscleGroup2
    });

    newExercise.save()
        .then(() => res.json('New exercise logged'))
        .catch(err => res.status(400).json('Error: ' + err));

});

module.exports = router;