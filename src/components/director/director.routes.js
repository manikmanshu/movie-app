'use strict';

const directorController = require('./director.controller');

module.exports = function (app) {
    app.get('/api/director', directorController.getDirectors);
    app.get('/api/director/:id', directorController.getDirector);
    app.post('/api/director', directorController.addDirector);
};
