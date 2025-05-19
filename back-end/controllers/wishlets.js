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



module.exports = router;