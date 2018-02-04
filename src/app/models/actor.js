var mongoose = require('mongoose');

var Actor = mongoose.model('Actor', {
    name: { type: String, required: true, trim: true }
});

module.exports = { Actor };