const { Actor } = require('./actor');
const { ObjectID } = require('mongodb');

function getActors(callback) {
    Actor.find().then((actors) => {
        callback(null, {
            actors,
            count: actors.length
        });
    }, (e) => {
        callback({ error: e, status: 400 });
    });
}

function getActor(id, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }
    Actor.findById(id)
        .then((actor) => {
            if (!actor) {
                return callback({ status: 404 });
            }
            callback(null, { actor });
        }).catch((e) => {
            return callback({ error: e, status: 400 });
        });
}

function getActorsWithGivenIds(ids, callback) {
    Actor.find({ _id: { $in: ids } })
        .then((actors) => {
            if (!actors) {
                return callback({ status: 404 });
            }
            callback(null, { actors });
        }
        ).catch((e) => {
            return callback({ errer: e, status: 400 });
        });
}
function addActor(body, callback) {
    var actor = new Actor(body);

    actor.save().then((mov) => {
        callback(null, mov);
    }, (e) => {
        callback({ status: 400, error: e });
    });
}

function removeActor(id, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }
    Actor.findByIdAndRemove(id)
        .then((actor) => {
            if (!actor) {
                return callback({ status: 404 });
            }
            callback(null, { actor });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

function updateActor(id, body, callback) {
    if (!ObjectID.isValid(id)) {
        return callback({ status: 404 });
    }

    Actor.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((actor) => {
            if (!actor) {
                return callback({ status: 404 });
            }
            callback(null, { actor });
        }).catch((e) => {
            callback({ status: 400, error: e });
        });
}

module.exports = {
    getActors,
    getActor,
    addActor,
    removeActor,
    updateActor,
    getActorsWithGivenIds
};
