const actorController = require('./actor.controller');

module.exports = function (app) {
    app.get('/api/actor', actorController.getActors);
    app.get('/api/actor/:id', actorController.getActor);
    app.post('/api/actor', actorController.addActor);
};
