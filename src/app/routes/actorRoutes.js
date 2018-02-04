const actorManager = require('./../manager/actor.manager');

module.exports = function (app) {

    app.get('/api/actor', (req, res) => {
        actorManager.getActors((err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });

    app.get('/api/actor/:id', (req, res) => {
        var id = req.params.id;
        actorManager.getActor(id, (err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });

    app.post('/api/actor', (req, res) => {
        actorManager.addActor(req.body, (err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });
}