const mongoose = require('mongoose');

connectionString = 'mongodb://localhost:27017/cubicle';

exports.initializeDatabase= () => mongoose.connect(connectionString)
