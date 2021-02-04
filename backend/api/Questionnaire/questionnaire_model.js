const { Schema, model } = require('mongoose');

const questionnaireSchema = new Schema({
    userId: { type: Number, required: true },
    gender: { type: String, required: true },
    placeOfBirth: { type: String, required: true },
    yearOfBirth: { type: Number, required: true },
    monthOfBirth: { type: Number, required: true },
    dayOfBirth: { type: Number, required: true },
    maritalStatus: { type: String, required: true },
    liveWith: { type: String, required: true },
    bathing: { type: String, required: true },
    getDressed: { type: String, required: true },
    getReady: { type: String, required: true },
    eating: { type: String, required: true },
    urinating: { type: String, required: true },
    defecating: { type: String, required: true },
    toilet: { type: String, required: true },
    bedSofa: { type: String, required: true },
    walking: { type: String, required: true },
    stairs: { type: String, required: true },
    education: { type: String, required: true },
    read: { type: String, required: true },
    workshop: { type: String, required: true },
    physicalExercise: { type: String, required: true },
    computer: { type: String, required: true },
    phoneNumber: { type: String, required: true },
});

module.exports = model('questionnaire', questionnaireSchema);