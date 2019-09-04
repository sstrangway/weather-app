exports.getCurrentWeather = (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.currently));
}

exports.getHourlyWeather = (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.hourly));
}

exports.getDatilyWeather = (req,res,next) => {
    res.send(JSON.stringify(res.currentWeather.daily));
}