const { Router } = require('express');
const router = Router();

const pyramids = require('./pyramids_model');

/**
 * Get all images
 */
router.get('/', async (req, res) => {
    const it = await pyramids.find();
    res.json(it);
});

/**
 * Adds a new img
 */
router.post('/', async (req, res) => {
    req.body.forEach( async item => {
        const it = new pyramids({ id: item.id, img: item.img });
        await it.save();
    });
    res.json({message: 'saved'});
});

module.exports = router;