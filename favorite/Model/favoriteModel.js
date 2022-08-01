const mongoose = require('mongoose');


const favoriteSchema = new mongoose.Schema({
    userid:{
        type: String,
        required: true,
    },
    favoriteItemArr:[{
        label:String,
        category: String,
        image:String,
        PROCNT:String,
        FAT:String,
        ENERC_KCAL:String,
        CHOCDF:String
    }]

})


//creating collection by using userSchema
const Favorite = mongoose.model('Favorite',favoriteSchema);
module.exports = Favorite;