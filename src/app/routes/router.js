const movieRoutes = require('./movieRoutes');
const actorRoutes = require('./actorRoutes');
const directorRoutes = require('./directorRoutes');
const genre = require('./../../data/genres');
module.exports = function (app) {    
    // movie api routes
    movieRoutes(app);
    actorRoutes(app);
    directorRoutes(app);

    app.get('/genres', (req, res) => {
        var genres = Object.keys(genre).map(function (key) { return genre[key]; });
        res.status(200).send(genres);
    });
};