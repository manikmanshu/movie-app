const movieManager = require('./../manager/movie.manager');

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
}