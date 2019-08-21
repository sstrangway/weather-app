const http = require('http');
const express = require('express');

const weatherRoutes = require('./routes/weather')

const app = express();

app.use(weatherRoutes);

const server = http.createServer(app);

server.listen(3000);