const Favorite = require('../models/Favorite');

// Get all favorites
const getAllFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({ user: req.user.id }).populate('animal');
    res.json(favorites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Add a favorite
const addFavorite = async (req, res) => {
  try {
    const newFavorite = new Favorite({
      user: req.user.id,
      animal: req.body.animalId,
    });

    await newFavorite.save();

    res.json(newFavorite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

// Remove a favorite
const removeFavorite = async (req, res) => {
  try {
    const favorite = await Favorite.findById(req.params.id);

    if (!favorite) {
      return res.status(404).json({ message: 'Favorite not found' });
    }

    // Check if the favorite belongs to the authenticated user
    if (favorite.user.toString() !== req.user.id) {
      return res.status(401).json({ message: 'Unauthorized' });
    }

    await favorite.remove();

    res.json({ message: 'Favorite removed' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllFavorites,
  addFavorite,
  removeFavorite,
};