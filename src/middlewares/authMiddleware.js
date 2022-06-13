const jwt = require('jsonwebtoken')
const {secret} = require('../config/constants')
const {promisify} = require('util')

const jwtVerify = promisify(jwt.verify)

    exports.auth =async (req, res, next) => {
        let token = req.cookies['session']

        if(token){
            try{
                const decodedToken =await jwtVerify(token, secret)
                req.user = decodedToken
                res.locals.user = decodedToken
            }catch(err){
                console.log(err);
              return res.redirect('/404')
            }
        }
    next()
}


exports.isAuth = (req, res, next) => {
    if(!req.user){
        return res.redirect('/404')
    }


    next()
}