const { Schema, model } = require('mongoose');

const exerciseResultsSchema = new Schema({
    id: { type: Number, required: true },
    userId: { type: Number, required: true },
    exerciseId: { type: Number, required: true },
    correctCount: { type: Number, required: true },
    failCount: { type: Number, required: true },
    omissionCount: { type: Number, required: true },
    finalScore: { type: Number, required: true },
    seconds: { type: Number, required: true }
});

module.exports = model('exerciseResults', exerciseResultsSchema);