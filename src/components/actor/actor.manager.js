const { Actor } = require('./actor');
const { ObjectID } = require('mongodb');
const logger = require('../../common/logger');

/**
 * Get Actors
 * @param {*} callback 
 */
function getActors(callback) {
    Actor.find().then((actors) => {
        callback(null, {
            actors,
            count: actors.length
        });
    }, (e) => {
        logger.error(e);
        callback({ error: e, status: 400 });
    });
}

/**
 * Get actor
 * @param {*} id 
 * @param {*} callback 
 */
function getActor(id, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Invalid actor id');
        return callback({ status: 404 });
    }
    Actor.findById(id)
        .then((actor) => {
            if (!actor) {
                logger.info('Actor not found');
                return callback({ status: 404 });
            }
            callback(null, { actor });
        }).catch((e) => {
            logger.error(e);
            return callback({ error: e, status: 400 });
        });
}

/**
 * Get actors with ids
 * @param {*} ids 
 * @param {*} callback 
 */
function getActorsWithGivenIds(ids, callback) {
    Actor.find({ _id: { $in: ids } })
        .then((actors) => {
            if (!actors) {
                logger.error('Actors not found');
                return callback({ status: 404 });
            }
            callback(null, { actors });
        }
        ).catch((e) => {
            logger.error(e);
            return callback({ errer: e, status: 400 });
        });
}

/**
 * Add Actor
 * @param {*} body 
 * @param {*} callback 
 */
function addActor(body, callback) {
    const actor = new Actor(body);

    actor.save().then((mov) => {
        callback(null, mov);
    }, (e) => {
        logger.error(e);
        callback({ status: 400, error: e });
    });
}

/**
 * Remove Actor
 * @param {*} id 
 * @param {*} callback 
 */
function removeActor(id, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Remove actor: invalid actor id');
        return callback({ status: 404 });
    }
    Actor.findByIdAndRemove(id)
        .then((actor) => {
            if (!actor) {
                logger.info('Remove Actor: actor not found');
                return callback({ status: 404 });
            }
            callback(null, { actor });
        }).catch((e) => {
            logger.error(e);
            callback({ status: 400, error: e });
        });
}

/**
 * UpdateActor
 * @param {*} id 
 * @param {*} body 
 * @param {*} callback 
 */
function updateActor(id, body, callback) {
    if (!ObjectID.isValid(id)) {
        logger.error('Update actor: invalid actor id');
        return callback({ status: 404 });
    }

    Actor.findByIdAndUpdate(id, { $set: body }, { new: true })
        .then((actor) => {
            if (!actor) {
                logger.info('update actor: actor not found');
                return callback({ status: 404 });
            }
            callback(null, { actor });
        }).catch((e) => {
            logger.error(e);
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
