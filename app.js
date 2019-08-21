const http = require('http');
const express = require('express');

const app = express();
const server = http.createServer(app);
var request = require('request');

const CITIES = {
    toronto: {
        longitude: 43.6532,
        latitude: -79.3832
    }
}

app.use(
    '/weather/:city', (req, res, next) => {
        const longitude = CITIES[req.params.city].longitude;
        const latitude = CITIES[req.params.city].latitude;
        request(`https://api.darksky.net/forecast/2ac8396158c217102066d33e2cd408ff/${longitude},${latitude}`, function (error, response, body) {
            res.currentWeather = JSON.parse(body)
            next();
        });
    },

);

app.get('/weather/:city/currently', (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.currently));
});

app.get('/weather/:city/hourly', (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.hourly));
});

app.get('/weather/:city/daily', (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.daily));
});

server.listen(3000);