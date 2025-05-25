const express = require('express')
const router = express.Router()

const User = require('../models/user')

const verifyToken = require('../middleware/verify-token')

router.get('/:userId', verifyToken, async (req, res) => {
    try {
        if (req.user._id !== req.params.userId) {
            return res.status(403).json({err: "unauthorized access"})
        }
        const user = await User.findById(req.params.userId)
        if(!user) {
            return res.status(404).json({err: 'user not found'})
        }

        res.json({ user })
    } catch (err) {
        res.status(500).json({ err: err.message })
    }
})

module.exports = router;
