const Wishlet = require("../models/wishlet");
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/verify-token");

router.post("/", verifyToken, async (req, res) => {
  try {
    const createdWishlet = await Wishlet.create({
      ...req.body,
    user: req.user._id
  });
    res.status(201).json(createdWishlet);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.get("/", verifyToken, async (req, res) => {
  try {
    const foundWishlets = await Wishlet.find({ user: req.user_id });
    res.status(200).json(foundWishlets);
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
});

router.get("/:wishletId", verifyToken, async (req, res) => {
  try {
    const foundWishlet = await Wishlet.findById(req.params.wishletId);
    if (!foundWishlet) {
      return res.status(404);
      throw new Error("Wishlet not found");
    }
    res.status(200).json(foundWishlet);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.delete("/:wishletId", verifyToken, async (req, res) => {
  try {
    const deletedWishlet = await Wishlet.findByIdAndDelete(
      req.params.wishletId
    );
    if (!deletedWishlet) {
      res.status(404);
      throw new Error("Pet not found.");
    }
    res.status(200).json(deletedWishlet);
  } catch (error) {
    if (res.statusCode === 404) {
      res.json({ error: error.message });
    } else {
      res.status(500).json({ error: error.message });
    }
  }
});

router.put("/:wishletId", verifyToken, async (req, res) => {
  try {
    const updateData = req.body;
    if (updateData.wishletIsCompleted && updateData.reflection) {
      updateData.reflection.completedDate = new Date();
    }
    const updatedWishlet = await Wishlet.findByIdAndUpdate(
      req.params.wishletId,
      updateData,
      { new: true }
    );
    if (!updatedWishlet) {
      res.status(404);
      throw new Error("Wishlet not found.");
    }
    res.status(200).json(updatedWishlet);
  } catch (err) {
    if (res.statusCode === 404) {
      res.json({ err: err.message });
    } else {
      res.status(500).json({ err: err.message });
    }
  }
});

module.exports = router;
