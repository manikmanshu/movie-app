var { Actor } = require('./app/models/actor');
var { Director } = require('./app/models/director');

var { persons, personType } = require('./data/persons');
const { mongoose } = require('./db/mongoose');

console.log('Clearing existing db data....');
Actor.remove({}).then(() => {
    console.log('Done clearing actor db data.');
    return Director.remove({});
}).then((done) => {
    console.log('Done clearing director db data.');
    console.log('Done clearing existing db data.');
    populateAgain();
    setTimeout(() => {
        mongoose.connection.close();
    }, 8000);
});


function populateAgain() {
    console.log('Populate new db data....');
    persons.forEach((person) => {
        var actor, director;
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
    console.log('Done populating new db data.');

    console.log('Data is populated close connection now');
}