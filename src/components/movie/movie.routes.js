'use strict';

const movieController = require('./movie.controller');

module.exports = function (app) {
    app.get('/api/movie', movieController.getMovies);
    app.get('/api/movie/:id', movieController.getMovie);
    app.get('/api/movie/page/:skip/:top', movieController.getPagedMovies);
    app.post('/api/movie', movieController.addMovie);
    app.delete('/api/movie/:id', movieController.removeMovie);
    app.patch('/api/movie/:id', movieController.updateMovie);
};
