const { Router } = require('express');
const router = Router();

const user = require('./user_model');

/**
 * Get user info by its id
 */
router.get('/:id', async (req, res) => {
    const us = await user.find(id => {
        return id === req.params.id;
    });
    res.json(us[0]);
});

/**
 * Adds a new user
 */
router.post('/', async (req, res) => {
    const { id, session, currentExercise } = req.body;
    const newUser = new user({ id, session, currentExercise });
    await newUser.save();
    res.json({message: 'saved'});
});

/**
 * Updates a user's currentExercise
 */
router.put('/:id/currentExercise', async (req, res) => {
    const us = await user.find(id => {
        return id === req.params.id;
    });
    user.findOneAndUpdate(us.currentExercise, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
});

/**
 * Updates a user's session
 */
router.put('/:id/session', async (req, res) => {
    const us = await user.find(id => {
        return id === req.params.id;
    });
    user.findOneAndUpdate(us.session, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Succesfully saved.');
    });
});

module.exports = router;