'use strict';

const { Director } = require('../director/director');
const { ObjectID } = require('mongodb');
const logger = require('../../common/logger');

/**
 * Get Directors
 * @param {*} callback 
 */
function getDirectors(callback) {    
    Director.find().then((directors) => {
        callback(null, {
            directors,
            count: directors.length
        });
    }, (e) => {
        logger.error(e);
        callback({ error: e, status: 400 });
    });
}

/**
 * Get Director
 * @param {*} id 
 * @param {*} callback 
 */
function getDirector(id, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Get director: invalid director id');
        return callback({ status: 404 });
    }
    Director.findById(id)
        .then((director) => {
            if (!director) {
                logger.error('Director not found');
                return callback({ status: 404 });
            }
            callback(null, { director });
        }).catch((e) => {
            logger.error(e);
            return callback({ error: e, status: 400 });
        });
}

/**
 * Add Director
 * @param {*} body 
 * @param {*} callback 
 */
function addDirector(body, callback) {
    const director = new Director(body);

    director.save().then((mov) => {
        callback(null, mov);
    }, (e) => {
        logger.error(e);
        callback({ status: 400, error: e });
    });
}

/**
 * Remove Director
 * @param {*} id 
 * @param {*} callback 
 */
function removeDirector(id, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Remove Director: director id not valid');
        return callback({ status: 404 });
    }
    Director.findByIdAndRemove(id)
        .then((director) => {
            if (!director) {
                logger.error('Remove director: director not found');
                return callback({ status: 404 });
            }
            callback(null, { director });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

/**
 * Update Director
 * @param {*} id 
 * @param {*} body 
 * @param {*} callback 
 */
function updateDirector(id, body, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Update director: invalid director id');
        return callback({ status: 404 });
    }

    Director.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((director) => {
            if (!director) {
                logger.error('Update director: director not found');
                return callback({ status: 404 });
            }
            callback(null, { director });
        }).catch((e) => {
            logger.error(e);
            callback({ status: 400, error: e });
        });
}

module.exports = { getDirectors, getDirector, addDirector, removeDirector, updateDirector };
