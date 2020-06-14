const { Schema, model } = require('mongoose');

const medalsSchema = new Schema({
    id: { type: Number, required: true },
    userId: { type: Number, required: true },
    exerciseId: { type: Number, required: true },
    medal: { type: String, required: true }
});

module.exports = model('medals', medalsSchema);