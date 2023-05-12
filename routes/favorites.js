const express = require('express');
const router = express.Router();

const {getAllFavorites, addFavorite, removeFavorite } = require("../controllers/FavoritesController")
//require("../controllers/blogsController");

//callback function
router.get("/", (req, res) => {
    //res.send response with a string
    res.send("hello from favorites");
});

// GET /favorites
// Get all favorites
router.get( "/all-favorites", getAllFavorites);

// POST /favorites
// Add a favorite
router.post('/addFavorite', addFavorite);

// DELETE /favorites/:id
// Remove a favorite
router.delete('/delete-by-id/:idToDelete', removeFavorite);

module.exports = router;