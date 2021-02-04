const { Schema, model } = require('mongoose');

const instrumentalQuestionnaireSchema = new Schema({
    userId: { type: Number, required: true },
    telephone: { type: String, required: true },
    shopping: { type: String, required: true },
    cooking: { type: String, required: true },
    householdChores: { type: String, required: true },
    laundry: { type: String, required: true },
    transport: { type: String, required: true },
    medicine: { type: String, required: true },
    economicAffairs: { type: String, required: true }
});

module.exports = model('instrumentalQuestionnaire', instrumentalQuestionnaireSchema);