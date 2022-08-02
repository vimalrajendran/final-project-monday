const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logger = require('morgan')
const favoriteRoutes = require('./FavoriteRoutes/favoriteRoutes') 
const cors=require('cors');

const port = 9000;
const app = express();
app.use(cors({
    origin: true,
    credentials: true,
}));
const Favourite_URI = 'mongodb://localhost:27017/NutritionDB';

app.use(bodyParser.json());
app.use(logger('dev'));
app.use('/api/favorite',favoriteRoutes);

mongoose.connect(Favourite_URI);
mongoose.connection.once('open', () => {
    console.log('Connected to server');
}).on('error', (err) => {
    console.log(err);
});

app.listen(port,err=>{
    if(err){
        console.log(err)
        return;
    }
    console.log('server is running on port ' + port);
})