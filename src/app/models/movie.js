var mongoose = require('mongoose');
var Scheme = mongoose.Schema;

var { Actor } = require('./actor');
var { Director } = require('./director');

var Movie = mongoose.model('Movie', {
    name: { type: String, required: true, minlength: 2, trim: true },
    imageUrl: { type: String, default: "image.png" },
    releaseDate: { type: Date },
    genre: { type: String },
    actors: { type: [Actor.schema], required: true },
    actorIds: [],
    directorId: { type: String, required: true },
    director: Director.schema
});

module.exports = { Movie };
