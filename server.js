//dependencies
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const env = require('dotenv').config();
const bodyParser = require('body-parser');


//middleware
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(express.static('public'));





















//mongoose connection
mongoose.connect('mongodb://localhost:27017/weather_emoji');
mongoose.connection.once('open', function(){
  console.log('How about that weather!');
});



//port
app.listen(3000, function(){
  console.log('What is the weather like in your world?');
});
