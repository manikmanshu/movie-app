'use strict';

const actorManager = require('./actor.manager');
const logger = require('../../common/logger');

// Get actors
function getActors(req, res) {
    logger.info('Get /actors');
    actorManager.getActors((err, data) => {
        if (err) {
            logger.error('Error in getting actors');
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

// Get actor
function getActor(req, res) {
    logger.info('Get /actor/:id');
    actorManager.getActor(req.params.id, (err, data) => {
        if (err) {
            logger.error(err);
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

// Add a actor
function addActor(req, res) {
    logger.info('Add actor');
    actorManager.addActor(req.body, (err, data) => {
        if (err) {
            logger.error('Error in adding actor');
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

module.exports = {
    getActors,
    getActor,
    addActor
};
