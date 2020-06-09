const { Schema, model } = require('mongoose');

const exerciseSchema = new Schema({
    id: { type: Number, required: true },
    _class: { type: String, required: true },
    title: { type: String, required: true }
});

module.exports = model('exercise', exerciseSchema);