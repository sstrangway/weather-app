const express = require('express');

const routes = express.Router();

var request = require('request');

const CITIES = {
    toronto: {
        longitude: 43.6532,
        latitude: -79.3832
    }
}

routes.use(
    '/weather/:city', (req, res, next) => {
        const longitude = CITIES[req.params.city].longitude;
        const latitude = CITIES[req.params.city].latitude;
        request(`https://api.darksky.net/forecast/2ac8396158c217102066d33e2cd408ff/${longitude},${latitude}`, function (error, response, body) {
            res.currentWeather = JSON.parse(body)
            next();
        });
    },

);

routes.get('/weather/:city/currently', (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.currently));
});

routes.get('/weather/:city/hourly', (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.hourly));
});

routes.get('/weather/:city/daily', (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.daily));
});

module.exports = routes;