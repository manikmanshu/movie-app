'use strict';
const { Actor } = require('./app/models/actor');
const { Director } = require('./app/models/director');

const { persons, personType } = require('./data/persons');
const { mongoose } = require('./db/mongoose');
const logger = require('./common/logger');

logger.info('Clearing existing db data....');
Actor.remove({}).then(() => {
    logger.info('Done clearing actor db data.');
    return Director.remove({});
}).then(() => {
    logger.info('Done clearing director db data.');
    logger.info('Done clearing existing db data.');
    populateAgain();
    setTimeout(() => {
        mongoose.connection.close();
    }, 8000);
});


function populateAgain() {
    logger.info('Populate new db data....');
    persons.forEach((person) => {
        let actor, director;
        switch (person.personType) {
            case personType.actor:
                actor = new Actor({ name: person.name });
                actor.save();
                break;
            case personType.director:
                director = new Director({ name: person.name });
                director.save();
                break;
            case personType.actorAndDirector:
                actor = new Actor({ name: person.name });
                director = new Director({ name: person.name });

                actor.save();
                director.save();
                break;
        }
    });
    logger.info('Done populating new db data.');

    logger.info('Data is populated close connection now');
}