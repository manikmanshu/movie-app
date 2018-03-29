const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('./common/logger');

const app = express();
const port = process.env.PORT || 8000;

require('./db/mongoose');
function initExpressMiddleWare() {
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
}

function initRoutes() {
    require('./router/routes')(app);
    app.all('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
    
}

function start() {
    app.listen(port, () => {
        logger.info(`We are live on port ${port}`);
    })
}

initExpressMiddleWare();
initRoutes();
start();





module.exports = { app };