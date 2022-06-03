const mongoose = require('mongoose');

connectionString = 'mongodb://localhost:27017/cubicle';

exports.initializeDatabase= () => mongoose.connect(connectionString)

// const cubeSchema = new mongoose.Schema({
//     id: Schema.Types.ObjectId,
//     name:{
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true,
//         maxlength: [100, 'Must be less than {VALUE}.']
//     },
//     ImageUrl:{
//         type: String,
//         required: true,
        
//     }, 
//     difficultyLevel: {
//         type: String,
//         required: true,
//         min: 1,
//         max: 6
//     } ,
//     Accessories:
//         { type: Schema.Types.ObjectId, ref: 'Accessories' }
    
//   });