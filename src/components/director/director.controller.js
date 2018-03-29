const directorManager = require('./director.manager');

function getDirectors(req, res) {
    directorManager.getDirectors((err, data) => {
        if (err) {
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

function getDirector(req, res) {
    var id = req.params.id;
    directorManager.getDirector(id, (err, data) => {
        if (err) {
            res.status(err.status).send(err.error);
        } else {
            res.send(data);
        }
    });
}

function addDirector(req, res) {
    directorManager.addDirector(req.body, (err, data) => {
        if (err) {
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
