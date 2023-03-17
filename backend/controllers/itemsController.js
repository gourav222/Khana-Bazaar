const itemsCategories = require("../models/itemsModels");

exports.createFoodCategori = async (req, res) => {
  try {
    const foodCategori = await itemsCategories.create(req.body);
    res.status(200).json({
      success: true,
      foodCategori,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getAllFoodItemsByCategori = async (req, res) => {
  try {
    const foodItemsByCategori = await itemsCategories.findOne({
      "categories.categorieType": req.param("categorieType"),
    });
    res.status(200).json({
      success: true,
      foodItemsByCategori,
    });
  } catch (error) {
    console.log(error);
  }
};
