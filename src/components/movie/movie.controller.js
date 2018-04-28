'use strict';

const movieManager = require('./movie.manager');
const directorManager = require('../director/director.manager');
const actorManager = require('../actor/actor.manager');
const _ = require('lodash');
const logger = require('../../common/logger');

// Get Movies
function getMovies(req, res) {
    logger.info('Get /movies');
    movieManager.getMovies((err, data) => {
        if (err) {
            logger.error('Error in fetching movies');
            res.status(err.status).send(err.error);
        } else {
            logger.info('Get /movies completed');
            res.send(data);
        }
    });
}

// Get a movie
function getMovie(req, res) {
    logger.info('Get /movies/:id');
    movieManager.getMovie(req.params.id, (err, data) => {
        if (err) {
            logger.error('Error in fetching movie');
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

// Get movies with pagination
function getPagedMovies(req, res) {
    const skipVal = parseInt(req.params.skip, 10);
    const topVal = parseInt(req.params.top, 10);
    const skip = isNaN(skipVal) ? 10 : skipVal;
    const top = isNaN(topVal) ? 0 : topVal;

    logger.info('Get /movies with pagination');
    movieManager.getPagedMovies(skip, top, (err, data) => {
        if (err) {
            logger.error('Error in fetching movies');
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

// Add movie
function addMovie(req, res) {
    logger.info('Add a movie');
    directorManager.getDirector(req.body.directorId, (err, directorData) => {
        if (err) {
            logger.error('Error in fetching director');
            res.status(err.status).send(err.error);
        } else {
            actorManager.getActorsWithGivenIds(req.body.actorIds, (err, actorsData) => {
                if (err) {
                    logger.error('Error in fetching actor');
                    res.status(err.status).send(err.error);
                } else {
                    const movie = {
                        name: req.body.name,
                        genre: req.body.genre,
                        imageUrl: req.body.imageUrl,
                        directorId: req.body.directorId,
                        releaseDate: req.body.releaseDate,
                        actorIds: req.body.actorIds,
                        actors: _.map(actorsData.actors, (actor) => _.pick(actor, ['_id', 'name'])),
                        director: {
                            _id: directorData.director._id,
                            name: directorData.director.name
                        }
                    };
                    movieManager.addMovie(movie, (err, data) => {
                        if (err) {
                            logger.error('Error in adding movie');
                            res.status(err.status).send(err.error);
                        } else {
                            res.send(data);
                        }
                    });
                }
            });
        }
    });
}

// Remove a movie
function removeMovie(req, res) {
    logger.info('Remove a /movies');
    movieManager.removeMovie(req.params.id, (err, data) => {
        if (err) {
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

function updateMovie(req, res) {
    logger.info('Update a movie');
    directorManager.getDirector(req.body.directorId, (err, directorData) => {
        if (err) {
            res.status(err.status).send(err.error);
        } else {
            actorManager.getActorsWithGivenIds(req.body.actorIds, (err, actorsData) => {
                if (err) {
                    res.status(err.status).send(err.error);
                } else {
                    const movie = {
                        name: req.body.name,
                        genre: req.body.genre,
                        imageUrl: req.body.imageUrl,
                        directorId: req.body.directorId,
                        releaseDate: req.body.releaseDate,
                        actorIds: req.body.actorIds,
                        actors: _.map(actorsData.actors, (actor) => _.pick(actor, ['_id', 'name'])),
                        director: {
                            _id: directorData.director._id,
                            name: directorData.director.name
                        }
                    };
                    movieManager.updateMovie(req.params.id, movie, (err, data) => {
                        if (err) {
                            res.status(err.status).send(err.error);
                        } else {
                            res.send(data);
                        }
                    });
                }
            });
        }
    });
}

module.exports = {
    getMovie,
    getMovies,
    getPagedMovies,
    addMovie,
    updateMovie,
    removeMovie
};
