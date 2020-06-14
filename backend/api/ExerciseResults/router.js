const { Router } = require('express');
const router = Router();

const exerciseResults = require('./exerciseResults_model');

/**
 * Adds a new result or updates it if it was already created
 * 
 * :id is the combination of userId + exerciseId as a string
 */
router.post('/', async (req, res) => {
    const query = { id: req.body.id };
    exerciseResults.findOneAndUpdate(query, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Results updated.');
    });
});

module.exports = router;