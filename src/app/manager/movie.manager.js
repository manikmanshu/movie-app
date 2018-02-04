const { Movie } = require('./../models/movie');
const { ObjectID } = require('mongodb');

var getMovies = (callback) => {
    Movie.find().then((movies) => {
        callback(null, {
            movies,
            count: movies.length
        });
    }, (e) => {
        callback({ error: e, status: 400 });
    });
};

var getMovie = (id, callback) => {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }
    Movie.findById(id)
        .then((movie) => {
            if (!movie) {
                return callback({ status: 404 });
            }
            callback(null, { movie });
        }).catch((e) => {
            return callback({ error: e, status: 400 });
        });
}

module.exports = { getMovies, getMovie };