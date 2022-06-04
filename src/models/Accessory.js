const { Schema, default: mongoose } = require('mongoose');

const AccessorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
     valdate:{
         validator: /^http?/g
     }
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },
    cubes: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Cube'
        }
    ]
    
})



const Accessory = mongoose.model('Accessory', AccessorySchema);

module.exports = Accessory