const Favorite = require('../models/Favorite');

// Get all favorites
async function getAllFavorites(req, res)  {
  try {
    const favorites = await Favorite.find({});
    res.json({success: true, favorites: allFavorites});
  } catch (error) {
    res.json({ success: false, message: error});
  }
}

// Add a favorite
async function addFavorite (req, res){
  try {
    const newFavorite = new Favorite({
      animal: req.body.animalId,
      image: req.body.image,
      name: req.body.name,
      age: req.body.age,
      breeds: req.body.breeds,
      gender: req.body.gender,
      location: req.body.location,
    });

    const response = await newFavorite.save();
    res.json({ success: true, newFavorite: response});
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error});
  }
};

// delete a favorite
async function deleteFavorite(req, res) {
  try {
    const { idToDelete } = req.params;  
    const deletedFavorite = await Favorite.findOneAndDelete(
      {id: idToDelete},
      req.body
      );
    res.json({succes: true, deleteFavorite: deletedFavorite});
  }catch (error){
    console.log(error);
    res.json({success: false, message: error});
  }
    

}module.exports = {
  getAllFavorites,
  addFavorite,
  deleteFavorite,
};