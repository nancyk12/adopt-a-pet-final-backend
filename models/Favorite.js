// //Model, Schema
const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");
// //Schema the shape of the data
// //uuid 

const favoriteSchema = new mongoose.Schema({
    
    image: { type: String, require: true },
    name: { type: String, require: true },
    type: { type: String, require: true },
    breeds: { type: String, require: true },
    location: { type: String, require: true },
    id: { type: String, default: uuidv4 },

});
const Favorite = mongoose.model("Favorite", favoriteSchema);

module.exports =  Favorite ;


// const mongoose = require('mongoose');
// const { v4: uuidv4 } = require("uuid");

// const favoriteSchema = new mongoose.Schema({
//   petId: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now,
//   },
// });

// const Favorite = mongoose.model('Favorite', favoriteSchema);

// module.exports = Favorite;

// const mongoose = require('mongoose');

// const favoriteSchema = new mongoose.Schema({
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//   },
//   animal: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Animal',
//     required: true,
//   },
// });

// const Favorite = mongoose.model('Favorite', favoriteSchema);

// module.exports = Favorite;