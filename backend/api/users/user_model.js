const { Schema, model } = require('mongoose');

const usersSchema = new Schema({
    id: { type: Number, required: true },
    session: { type: Number, required: true },
    currentExercise: { type: Number, required: true }
});

module.exports = model('user', usersSchema);