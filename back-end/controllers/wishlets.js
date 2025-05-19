const Wishlet = require('../models/wishlet');
const express = require('express')
const router = express.Router();

router.post('/', async (req, res) => {
    try {
        const createdWishlet = await Wishlet.create(req.body)
        res.status(201).json(createdWishlet)
    } catch (err) {
        res.status(500).json({err: err.message});
    }
});

//show
router.get('/:wishletId', async (req, res) => {
    try {
        const foundWishlet = await Wishlet.findById(req.params.wishletId)
        if (!foundWishlet) {
            return res.status(404)
            throw new Error('Wishlet not found')
        }
        res.status(200).json(foundWishlet)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({ error: error.message })
        } else {
            res.status(500).json({ error: error.message })
        }        
    }
})

module.exports = router