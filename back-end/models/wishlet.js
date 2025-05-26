const mongoose = require("mongoose");

const reflectionSchema = mongoose.Schema({
  notes: {
    type: String,
    required: true,
  },
  completedDate: {
    type: Date,
    required: true,
  },
});

const wishletSchema = mongoose.Schema({
  wishletTitle: {
    type: String,
    required: true,
  },
  wishletDescription: {
    type: String,
    required: true,
  },
  wishletCategory: {
    type: String,
    required: true,
    enum: [
      "Travel",
      "Growth",
      "Adventure",
      "Charity",
      "Culture",
      "Education",
      "Family",
      "Career",
      "Personal",
      "Miscellaneous",
    ],
  },
  wishletIsCompleted: {
    type: Boolean,
  },
  wishletTargetDate: {
    type: Date,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  reflection: reflectionSchema,
});

const Wishlet = mongoose.model("Wishlet", wishletSchema);

module.exports = Wishlet;