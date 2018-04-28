'use strict';

const mongoose = require('mongoose');

const Actor = mongoose.model('Actor', {
    name: { type: String, required: true, trim: true }
});

module.exports = { Actor };
