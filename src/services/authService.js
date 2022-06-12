const User = require('../models/User')

exports.register = (userdata) => {
return User.create(userdata)
}