const { Router } = require('express');
const router = Router();

const classifyObjects = require('./classifyObjects_model');

/**
 * Get all images
 */
router.get('/', async (req, res) => {
    const co = await classifyObjects.find();
    res.json(co);
});

/**
 * Get image info by its id
 */
router.get('/:id', async (req, res) => {
    const co = await classifyObjects.find(id => {
        return id === req.params.id;
    });
    res.json(co[0]);
});

/**
 * Adds a new img
 */
router.post('/', async (req, res) => {
    req.body.forEach( async item => {
        const newCO = new classifyObjects({ id: item.id, img: item.img });
        await newCO.save();
    });
    res.json({message: 'saved'});
});

module.exports = router;