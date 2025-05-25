const Wishlet = require('../models/wishlet');
const express = require('express');
const router = express.Router();

router.post('/', async (req,res) => { 
    try {
      console.log('Incoming POST data:', req.body)
        const createdWishlet = await Wishlet.create(req.body)
        console.log('Created wishlet:', createdWishlet)
        res.status(201).json(createdWishlet)
    } catch (err) {
        console.error('X Error in POST /whislets:', err)
        res.status(500).json({ err: err.message })
    }
})

router.get('/', async (req, res) => {
  try {
    const foundWishlets = await Wishlet.find();
    res.status(200).json(foundWishlets);
  } catch (err) {
    res.status(500).json({ err: err.message }); 
  }
});

router.get('/:wishletId', async (req, res) => {
  try {
    const foundWishlet = await Wishlet.findById(req.params.wishletId);
    if (!foundWishlet) {
      res.status(404);
      throw new Error('Wishlet not found.');
    }
    res.status(200).json(foundWishlet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
});

router.delete('/:wishletId', async (req, res) => {
    try {
        const deletedWishlet = await Wishlet.findByIdAndDelete(req.params.wishletId)
        if(!deletedWishlet) {
            res.status(404)
            throw new Error("Wishlet Not Found")
        }
        res.status(200).json(deletedWishlet)
    } catch (err) {
        if(res.statusCode === 404){
            res.json({err: err.message})
        } else {
            res.status(500).json({err: err.message})
        }
    }
})

router.put('/:wishletId', async (req, res) => {
    try {
        const updatedWishlet = await Wishlet.findByIdAndUpdate(req.params.wishletId, req.body, {new: true})
        if(!updatedWishlet) {
            res.status(404)
            throw new Error('Wishlet not found')
        }
        res.status(200).json(updatedWishlet)
    } catch (error) {
        if (res.statusCode === 404) {
            res.json({error: error.message})
        } else {
            res.status(500).json({error: error.message})
        }
    }
})


module.exports = router;