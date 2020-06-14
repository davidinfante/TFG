const { Router } = require('express');
const router = Router();

const instrumentalQuestionnaire = require('./instrumentalQuestionnaire_model');

/**
 * Adds a new result for a questionnaire or updates it if it was already created
 */
router.post('/', (req, res) => {
    const query = { userId: req.body.userId };
    instrumentalQuestionnaire.findOneAndUpdate(query, req.body, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Results updated.');
    });
});

module.exports = router;