const mongoose = require("mongoose");
const { compile } = require("morgan");

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
});

UserSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        delete returnedObject.hashedPassword
    }
})

const User = mongoose.model("User", UserSchema);

module.exports = User;