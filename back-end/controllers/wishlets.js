const Wishlet = require('../models/wishlet')
const express = require ('express')
const router = express.Router();


router.post('/', async (req, res) => {
    try {
        const createdWishlet = await Wishlet.create(req.body)
        res.status(201).json(createdWishlet)
    } catch (err) {
        res.status(500).json({err: err.message});
    }
    
});

router.get('/', async (req, res) => {
    try {
        const foundWishlets = await Wishlet.find();
        res.status(200).json(foundWishlets);
    }   catch(err) {
        res.status(500).json({ err: err.message});
    }
});

router.put('/:wishletId', async (req, res) => {
    try {
        const updatedWishlet = await Wishlet.findByIdAndUpdate(req.params.wishletId, req.body, { new: true });
        if (!updatedWishlet) {
            return res.status(404).json({ err: 'Wishlet not found.' });
        }
        res.status(200).json(updatedWishlet);
    } catch (err) {
        if (res.statusCode === 404) {
          res.json({ err: err.message});
        } else {
          res.status(500).json({ err: err.message});
        }
    }
});



module.exports = router;