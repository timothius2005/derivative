const router = require('express').Router();
let Movement = require('../models/movement.model');

router.get('/', (req, res) => {
    const docquery = Movement.find({});
    docquery
      .exec()
      .then(movements => {
        res.status(200).json(movements);
      })
      .catch(error => {
        res.status(500).send(error);
        return;
      });
});

module.exports = router;