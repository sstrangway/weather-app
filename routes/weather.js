const express = require('express');

const routes = express.Router();
const cityController = require('../controller/cities');
const weatherController = require('../controller/weather');

routes.use('/weather/:city',  cityController.addCity);
routes.get('/weather/:city/currently', weatherController.getCurrentWeather);
routes.get('/weather/:city/hourly', weatherController.getHourlyWeather);
routes.get('/weather/:city/daily', weatherController.getDatilyWeather);

module.exports = routes;