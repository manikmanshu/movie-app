const movieRoutes = require('./movieRoutes');

module.exports = function (app) {    
    // movie api routes
    movieRoutes(app);	
};