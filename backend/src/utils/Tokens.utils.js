const jwt = require("jsonwebtoken")
const { PUBLIC_DATA } = require("../../constant")
const User = require("../models/user.models")

exports.generatoken = (User,expire='id')=>{
    const token = jwt.sign({userid:user_id},PUBLIC_DATA.jwt_auth,{
        expireIn:expire
    })
    return token
}
exports.validateToken = (token)=>{
    const tokens = jwt.verify(token,PUBLIC_DATA,jwt_auth)
    return tokens
}
