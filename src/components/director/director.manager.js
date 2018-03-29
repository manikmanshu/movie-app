const { Director } = require('../director/director');
const { ObjectID } = require('mongodb');

function getDirectors(callback) {
    Director.find().then((directors) => {
        callback(null, {
            directors,
            count: directors.length
        });
    }, (e) => {
        callback({ error: e, status: 400 });
    });
}

function getDirector(id, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }
    Director.findById(id)
        .then((director) => {
            if (!director) {
                return callback({ status: 404 });
            }
            callback(null, { director });
        }).catch((e) => {
            return callback({ error: e, status: 400 });
        });
}

function addDirector(body, callback) {
    var director = new Director(body);

    director.save().then((mov) => {
        callback(null, mov);
    }, (e) => {
        callback({ status: 400, error: e });
    });
}

function removeDirector(id, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }
    Director.findByIdAndRemove(id)
        .then((director) => {
            if (!director) {
                return callback({ status: 404 });
            }
            callback(null, { director });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

function updateDirector(id, body, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }

    Director.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((director) => {
            if (!director) {
                return callback({ status: 404 });
            }
            callback(null, { director });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

module.exports = { getDirectors, getDirector, addDirector, removeDirector, updateDirector };
