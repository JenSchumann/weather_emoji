const express = require('express');
const router = express.Router();
const getWeather = require('../bin/weather.js');


router.get('/', (req, res) => {
  getWeather(res);
})

router.post('/', (req, res)=>{
  console.log(req.body.city, 'req.body')
  res.send('hi')
  getWeather(res, req.body.city)
})

module.exports = router;
