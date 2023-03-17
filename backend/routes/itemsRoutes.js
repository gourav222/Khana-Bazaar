const express = require("express");

const router = express.Router();
const {createFoodCategori, getAllFoodItemsByCategori} = require('../controllers/itemsController')

router.route("/foodCategori").post(createFoodCategori);
router.route("/foodItemsByCategori").get(getAllFoodItemsByCategori);
module.exports = router