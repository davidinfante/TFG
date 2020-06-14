if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');

// Inits
const app = express();
require('./database');

// Settings
app.set('port', 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/users', require('./api/users/router'));

app.use('/api/exerciseResults', require('./api/exerciseResults/router'));

app.use('/api/questionnaire', require('./api/questionnaire/router'));
app.use('/api/instrumentalQuestionnaire', require('./api/instrumentalQuestionnaire/router'));

app.use('/api/classifyObjects', require('./api/classifyObjects/router'));
app.use('/api/directNumbers', require('./api/directNumbers/router'));
app.use('/api/numbersAndVowels', require('./api/numbersAndVowels/router'));
app.use('/api/positions', require('./api/positions/router'));
app.use('/api/pyramids', require('./api/pyramids/router'));
app.use('/api/logicalSeries', require('./api/logicalSeries/router'));

// Start server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});