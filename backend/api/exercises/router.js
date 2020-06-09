const { Router } = require('express');
const router = Router();

const exercise = require('./exercise_model');

router.get('/:id', async (req, res) => {
    const exer = await exercise.find(id => {
        return id === req.params.id;
    });
    res.json(exer);
});

/*router.post('/', async (req, res) => {
    const { id, _class, title } = req.body;
    const newExercise = new exercise({ id, _class, title });
    await newExercise.save();
    res.json({message: 'saved'});
});*/

module.exports = router;