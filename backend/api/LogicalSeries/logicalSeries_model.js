const { Schema, model } = require('mongoose');

const logicalSeriesSchema = new Schema({
    id: { type: String, required: true },
    img: { type: Schema.Types.Mixed, required: true }
});

module.exports = model('logicalSeries', logicalSeriesSchema);