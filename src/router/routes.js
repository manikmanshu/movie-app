'use strict';

const movieRoutes = require('../components/movie/movie.routes');
const actorRoutes = require('../components/actor/actor.routes');
const directorRoutes = require('../components/director/director.routes');
const userRoutes = require('../components/user/user.routes');
const genre = require('../data/genres');
module.exports = function (app) {    
    // movie api routes
    movieRoutes(app);
    actorRoutes(app);
    directorRoutes(app);
    userRoutes(app);

    app.get('/genres', (req, res) => {
        let genres = Object.keys(genre).map(function (key) { return genre[key]; });
        res.status(200).send(genres);
    });
};