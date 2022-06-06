const Accessory = require('../models/Accessory');

exports.createAccessory = (accessory) => {
return Accessory.create(accessory)
}

exports.getAllAccessories = () => {
   return Accessory.find()
}

exports.getAllAvailable = (ids) => {
   return Accessory.find({_id: {$nin: ids}})
}