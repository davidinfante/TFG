const { Router } = require('express');
const router = Router();

const medals = require('./medals_model');

/**
 * Gets a medal from the user and exercise specified
 */
router.get('/:id', async (req, res) => {
    const us = await medals.find({ id: req.params.id });
    res.json(us[0]);
});

/**
 * Creates a new medal for the user and exercise specified
 */
router.post('/:finalScore', (req, res) => {
    let medal;
    if (req.params.finalScore >= 0 && req.params.finalScore < 5) {
        medal = "bronze";
    } else if (req.params.finalScore >= 5 && req.params.finalScore < 7.5) {
        medal = "silver";
    } else if (req.params.finalScore >= 7.5 && req.params.finalScore <= 10) {
        medal = "gold";
    }
    const query = { id: req.body.id };
    const values = { id: req.body.id, userId:req.body.userId, exerciseId: req.body.exerciseId, medal: medal };
    medals.findOneAndUpdate(query, values, {upsert: true}, function(err, doc) {
        if (err) return res.send(500, {error: err});
        return res.send('Results updated.');
    });
});

module.exports = router;