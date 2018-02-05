const movieManager = require('./../manager/movie.manager');
const directorManager = require('./../manager/director.manager');
const actorManager = require('./../manager/actor.manager');
const _ = require('lodash');

module.exports = function (app) {

    app.get('/api/movie', (req, res) => {
        movieManager.getMovies((err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });

    app.get('/api/movie/:id', (req, res) => {
        var id = req.params.id;
        movieManager.getMovie(id, (err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });

    app.get('/api/movie/page/:skip/:top', (req, res) => {
        var skipVal = parseInt(req.params.skip, 10), 
            topVal = parseInt(req.params.top, 10),
            skip = isNaN(skipVal) ? 10 : skipVal,
            top = isNaN(topVal) ? 0 : topVal;
        movieManager.getPagedMovies(skip, top, (err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });


    app.post('/api/movie', (req, res) => {
        directorManager.getDirector(req.body.directorId, (err, directorData) => {
            if (err) {
                res.status(err.status).send(err.error);
            } else {
                actorManager.getActorsWithGivenIds(req.body.actorIds, (err, actorsData) => {
                    if (err) {
                        res.status(err.status).send(err.error);
                    } else {
                        var movie = {
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
                                res.status(err.status).send(err.error);
                            }
                            else {
                                res.send(data);
                            }
                        });
                    }

                });
            }
        })

    });

    app.delete('/api/movie/:id', (req, res) => {
        var id = req.params.id;
        movieManager.removeMovie(id, (err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });

    app.patch('/api/movie/:id', (req, res) => {
        var id = req.params.id;
        directorManager.getDirector(req.body.directorId, (err, directorData) => {
            if (err) {
                res.status(err.status).send(err.error);
            } else {
                actorManager.getActorsWithGivenIds(req.body.actorIds, (err, actorsData) => {
                    if (err) {
                        res.status(err.status).send(err.error);
                    } else {
                        var movie = {
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
                        movieManager.updateMovie(id, movie, (err, data) => {
                            if (err) {
                                res.status(err.status).send(err.error);
                            }
                            else {
                                res.send(data);
                            }
                        });
                    }

                });
            }
        });
    });

}