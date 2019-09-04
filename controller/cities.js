var request = require('request');

const CITIES = {
    toronto: {
        longitude: 43.6532,
        latitude: -79.3832
    }
}

exports.addCity = (req, res, next) => {
    const longitude = CITIES[req.params.city].longitude;
    const latitude = CITIES[req.params.city].latitude;
    request(`https://api.darksky.net/forecast/2ac8396158c217102066d33e2cd408ff/${longitude},${latitude}`, function (error, response, body) {
        res.currentWeather = JSON.parse(body)
        next();
    });
}