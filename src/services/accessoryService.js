const Accessory = require('../models/Accessory');

exports.createAccessory = (accessory) => {
return Accessory.create(accessory)
}
