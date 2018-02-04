const directorManager = require('./../manager/director.manager');

module.exports = function (app) {

    app.get('/api/director', (req, res) => {
        directorManager.getDirectors((err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });

    app.get('/api/director/:id', (req, res) => {
        var id = req.params.id;
        directorManager.getDirector(id, (err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });

    app.post('/api/director', (req, res) => {
        directorManager.addDirector(req.body, (err, data) => {
            if (err) {
                res.status(err.status).send(err.error);
            }
            else {
                res.send(data);
            }
        });
    });
}