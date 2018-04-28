'use strict';

const mongoose = require('mongoose');

const Director = mongoose.model('Director', {
    name: { type: String, required: true, trim: true }
});

module.exports = { Director };
