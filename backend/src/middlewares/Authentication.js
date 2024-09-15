const { header } = require("express-validator")
const ApiError = require("../utils/ApiError")
const httpStatus = require("http-status")
const { validateToken } = require("../utils/Tokens.utils")
const router = require("../routes/Auth.route")

const Authentication = (req,res,next)=>{
    try {
                 const headers = req.headers['authorization'] || ''
                 if(!header || !headers.startWith("Bearer")){
                    throw new ApiError(httpStatus.UNAUTHORIZED,"please Login first")   
                     }
                     const auth_token = headers.split("")[1]

                     if(!auth_token){
                        throw new ApiError(httpStatus.UNAUTHORIZED,"please Provide valid ")
                     }
                     const data =validateToken(auth_token)
                     req.user =data.userid
                     next()
    } catch (error) {
                next(error)
        
    }
}

module.exports = router