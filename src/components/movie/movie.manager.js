const { Movie } = require('./movie');
const { ObjectID } = require('mongodb');
const logger = require('../../common/logger');

/**
 * Get Movies
 * @param {*} callback 
 */
function getMovies(callback) {
    Movie.find().then((movies) => {
        callback(null, {
            movies,
            count: movies.length
        });
    }, (e) => {
        logger.error(e);
        callback({ error: e, status: 400 });
    });
}

/**
 * Get a Movie
 * @param {*} id 
 * @param {*} callback 
 */
function getMovie(id, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Get Movie: id is invalid');
        return callback({ status: 404 });
    }
    Movie.findById(id)
        .then((movie) => {
            if (!movie) {
                logger.info(`Movie with if ${id} not found`);
                return callback({ status: 404 });
            }
            callback(null, { movie });
        }).catch((e) => {
            logger.error(e);
            return callback({ error: e, status: 400 });
        });
}

/**
 * Add Movie
 * @param {*} body 
 * @param {*} callback 
 */
function addMovie(body, callback) {
    const movie = new Movie(body);

    movie.save().then((mov) => {
        callback(null, mov);
    }, (e) => {
        logger.error(e);
        callback({ status: 400, error: e });
    });
}

/**
 * Remove Movie
 * @param {*} id 
 * @param {*} callback 
 */
function removeMovie(id, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Remove Movie: movie Id is invalid');
        return callback({ status: 404 });
    }
    Movie.findByIdAndRemove(id)
        .then((movie) => {
            if (!movie) {
                logger.info(`Movie with if ${id} not found`);
                return callback({ status: 404 });
            }
            callback(null, { movie });
        }).catch((e) => {
            logger.error(e);
            callback({ status: 400, error: e });
        });
}

/**
 * Update Movie
 * @param {*} id 
 * @param {*} body 
 * @param {*} callback 
 */
function updateMovie(id, body, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Update Movie: movie Id is invalid');
        return callback({ status: 404 });
    }

    Movie.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((movie) => {
            if (!movie) {
                logger.info(`Movie with if ${id} not found`);
                return callback({ status: 404 });
            }
            callback(null, { movie });
        }).catch((e) => {
            logger.error(e);
            callback({ status: 400, error: e });
        });
}

/**
 * Get Paged Movies
 * @param {*} pageNumber 
 * @param {*} top 
 * @param {*} callback 
 */
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
            logger.error(e);
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
