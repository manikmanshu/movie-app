const mongoose = require('mongoose');

var Director = mongoose.model('Director', {
    name: { type: String, required: true, trim: true }
});

module.exports = { Director };
