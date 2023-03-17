const mongoose =  require('mongoose');
const itemsSchema = new mongoose.Schema({
    categories:{
        categorieType:{
            type:String,
            required:[true,"Please Enter the Food Categori"]
        },
        items:{
            type:[{
                foodName:{
                    type:String,
                    required:true
                },
                imgUrl:{
                    type:String,
                    required:true
                }
            }],
            required:[true,"Please enter the food items"]
        }
    }
})
module.exports = mongoose.model("FoodCategories",itemsSchema);