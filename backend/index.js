if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const express = require('express');
const morgan = require('morgan');

// Inits
const app = express();
require('./database');

// Settings
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended: false}));
app.use(express.json());

// Routes
app.use('/api/users', require('./api/users/router'));
app.use('/api/classifyObjects', require('./api/ClassifyObjects/router'));
app.use('/api/directNumbers', require('./api/DirectNumbers/router'));
app.use('/api/numbersAndVowels', require('./api/NumbersAndVowels/router'));
app.use('/api/positions', require('./api/Positions/router'));
app.use('/api/pyramids', require('./api/Pyramids/router'));
app.use('/api/logicalSeries', require('./api/LogicalSeries/router'));

// Start server
app.listen(app.get('port'), () => {
    console.log('Server on port ', app.get('port'));
});