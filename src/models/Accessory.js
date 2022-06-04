const { Schema, default: mongoose } = require('mongoose');

const AccessorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        // validate:{
        //     validator: function(){
        //         return this.ImageUrl.startsWith('http')
        //     }
        // }
    },
    description: {
        type: String,
        required: true,
        maxlength: 100
    },

})



const Accessory = mongoose.model('Accessory', AccessorySchema);

module.exports = Accessory