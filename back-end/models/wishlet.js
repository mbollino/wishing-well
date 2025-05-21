const mongoose = require('mongoose');

const wishletSchema = mongoose.Schema({
    
    Title: {
        type: String,
        required: true,
   
    },
    Description: {
        type: String,
        required: true,
    
    },
    Category: {
        type: String,
        required: true,
        enum: ["Travel", "Growth", "Adventure", "Charity", "Culture", "Education", "Family", "Career", "Personal", "Miscellaneous"]
        
    },
    IsCompleted: {
        type: Boolean,
    },

    TargetDate: {
        type: Date,
    }

});

// const UserSchema = new mongoose.Schema({
//     userName: {
//        type: String,
//        required: true, 
//     },

//     email: {
//         type: String,
//         required: true,
//     },

//     password: {
//         type: String,
//         required: true,
//     },

//     wishlets: [wishletSchema],

// });

// const User = mongoose.model("User", UserSchema);

const wishlet = mongoose.model("wishlet", wishletSchema);
  
module.exports = wishlet