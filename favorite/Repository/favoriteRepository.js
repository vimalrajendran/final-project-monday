const FavoriteModel = require('../Model/favoriteModel');


function AddFavorite(info) {

    return new Promise((resolve, reject) => {
        FavoriteModel.findOne({ userid: info.userid }, (err, user) => {
            if (!user) {
                const Favorite = new FavoriteModel({
                    userid: info.userid,
                    favoriteItemArr: [
                        {
                            label:info.label,
                            category: info.category,
                            image:info.image,
                            PROCNT:info.PROCNT,
                            FAT:info.FAT,
                            ENERC_KCAL:info.ENERC_KCAL,
                            CHOCDF:info.CHOCDF
                        }
                    ]

                })

                Favorite.save((err) => {
                    if (!err) {
                        resolve("Item Added to favorite successfully")
                    }
                })

            }

            else if (user) {

                FavoriteModel.findOneAndUpdate({ userid: info.userid }, {
                    $push: {
                        favoriteItemArr: {
                            label:info.label,
                            category: info.category,
                            image:info.image,
                            PROCNT:info.PROCNT,
                            FAT:info.FAT,
                            ENERC_KCAL:info.ENERC_KCAL,
                            CHOCDF:info.CHOCDF
                        }
                    }
                }, (err, data) => {
                    if (!err) {

                        resolve('Item Added to favorite Successfully');
                    }
                })

            }
            else {
                reject(err);
            }
        })
    })
}


function GetFavorite(userid) {
    return new Promise((resolve,reject)=>{
        FavoriteModel.findOne({userid:userid},(err,user)=>{
            if(!err&&user){
                resolve(user);
            }
            else{
                reject('User not found');
            }
        })
    })
}


//to remove form favorite
function RemoveFavorite(info){
    return new Promise((resolve,reject)=>{
        FavoriteModel.findOneAndUpdate(
            { userid: info.userid },
            { $pull: { favoriteItemArr: { label:info.label } } },
            (err,data)=>{
                if(!err&&data){
                    console.log(data);
                    resolve("Item removed from favoritelist successfully");
                }
                else {
                    reject("this item is not in favorite list");
                }
            }
        )
    })
}

module.exports = { AddFavorite,GetFavorite,RemoveFavorite}