const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const logger = require('./common/logger');

const app = express();
const port = process.env.PORT || 8000;

// Create DB connection
require('./db/mongoose');
/**
 * Initialize Express Middleware
 */
function initExpressMiddleWare() {
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(bodyParser.json());
}

/**
 * Initialize express routes
 */
function initRoutes() {
    require('./router/routes')(app);
    app.all('/*', (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
    
}

/**
 * Start Express app
 */
function start() {
    app.listen(port, () => {
        logger.info(`We are live on port ${port}`);
    })
}

initExpressMiddleWare();
initRoutes();
start();

module.exports = { app };