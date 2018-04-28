'use strict';

const directorManager = require('./director.manager');
const logger = require('../../common/logger');

// Get directors
function getDirectors(req, res) {
    logger.info('Get /directors');
    directorManager.getDirectors((err, data) => {
        if (err) {
            logger.error('Error in fetching directors');
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

// Get a director
function getDirector(req, res) {
    logger.info('Get /director/:id');
    directorManager.getDirector(req.params.id, (err, data) => {
        if (err) {
            logger.error('Error in fetching director');
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

// Add a director
function addDirector(req, res) {
    logger.info('Add a director');
    directorManager.addDirector(req.body, (err, data) => {
        if (err) {
            logger.error('Error in adding director');
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

module.exports = {
    getDirectors,
    getDirector,
    addDirector
};
