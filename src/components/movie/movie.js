const mongoose = require('mongoose');
const { Actor } = require('../actor/actor');
const { Director } = require('../director/director');

var MovieSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 2, trim: true },
    imageUrl: { type: String, default: 'image.png' },
    releaseDate: { type: Date },
    genre: { type: String },
    actors: { type: [Actor.schema], required: true },
    actorIds: [],
    directorId: { type: String, required: true },
    director: Director.schema
});

var Movie = mongoose.model('Movie', MovieSchema);

module.exports = { Movie };