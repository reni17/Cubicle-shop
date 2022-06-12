const User = require('../models/User')
const bcrypt = require('bcrypt')
const saltRounds = 12
exports.register =async ({username, password, repeatPassword}) => {
  
if(password !== repeatPassword){
    return false
}

const hashedPassword = await bcrypt.hash(password, saltRounds)

let createdUser = User.create({
    username,
    password: hashedPassword
})

return createdUser
}