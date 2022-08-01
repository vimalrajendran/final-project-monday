const express = require('express');
const router = express.Router();
const {GetFromFavorite,AddToFavorite,RemoveFromFavorite} = require('../Controller/favoriteControllers')


router.post('/addToFavorite',AddToFavorite);
router.get('/getFavorite',GetFromFavorite)
router.put('/removeFavorite',RemoveFromFavorite);


module.exports = router;