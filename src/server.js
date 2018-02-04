const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./db/mongoose');

const app = express();
const port = process.env.PORT || 8000;

function initExpressMiddleWare() {
    app.use(bodyParser.json());
}

function initRoutes() {
    require('./app/routes/router')(app);
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