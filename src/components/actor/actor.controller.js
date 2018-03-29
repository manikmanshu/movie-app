const actorManager = require('./actor.manager');

function getActors(req, res) {
    actorManager.getActors((err, data) => {
        if (err) {
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

function getActor(req, res) {
    var id = req.params.id;
    actorManager.getActor(id, (err, data) => {
        if (err) {
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

function addActor(req, res) {
    actorManager.addActor(req.body, (err, data) => {
        if (err) {
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
