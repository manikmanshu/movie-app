const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 8000;

function initExpressMiddleWare() {
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
}

function initRoutes() {
    require('./app/routes/router')(app);
    app.all('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
    
}

function start() {
    app.listen(port, () => {
        console.log(`We are live on port ${port}`);
    })
}

initExpressMiddleWare();
initRoutes();
start();





module.exports = { app };