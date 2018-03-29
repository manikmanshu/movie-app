const { Movie } = require('./movie');
const { ObjectID } = require('mongodb');

function getMovies(callback) {
    Movie.find().then((movies) => {
        callback(null, {
            movies,
            count: movies.length
        });
    }, (e) => {
        callback({ error: e, status: 400 });
    });
}

function getMovie(id, callback) {
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

function addMovie(body, callback) {
    var movie = new Movie(body);

    movie.save().then((mov) => {
        callback(null, mov);
    }, (e) => {
        callback({ status: 400, error: e });
    });
}

function removeMovie(id, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }
    Movie.findByIdAndRemove(id)
        .then((movie) => {
            if (!movie) {
                return callback({ status: 404 });
            }
            callback(null, { movie });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

function updateMovie(id, body, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }

    Movie.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((movie) => {
            if (!movie) {
                return callback({ status: 404 });
            }
            callback(null, { movie });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

function getPagedMovies(pageNumber, top, callback) {
    Movie.count()
        .then((count) => {
            Movie.find()
                .sort({ name: 1 })
                .skip(pageNumber)
                .limit(top)
                .then((movies) => {
                    callback(null, { movies, count });
                });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

module.exports = {
    getMovies,
    getMovie,
    addMovie,
    removeMovie,
    updateMovie,
    getPagedMovies
};
