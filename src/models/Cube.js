const { Schema, default: mongoose } = require('mongoose');

const cubeSchema = new Schema({
name:{
    type: String,
    required: true
},
description: {
    type: String,
    required: true,
    maxlength: 100
},
imageUrl: {
    type: String,
    required: true,
    validate: {
       validator: function(){
           return this.imageUrl.startsWith('http')
       },
       message: 'Image URL should be a link'
    }
},
difficultyLevel: {
    type: String,
    required: true,
    min: 1,
    max: 6
},
accessories: [
    {
        type: mongoose.Types.ObjectId,
        ref: 'Accessory'
    }
]
})


const Cube = mongoose.model('Cube', cubeSchema);

module.exports = Cube