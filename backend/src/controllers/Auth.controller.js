const CatchAsync = require("../utils/CatchAsync")
const AuthServices = require("../services/Auth.service")
const httpStatus = require("http-status");
class AuthController{
        static RegisterUser = CatchAsync(async(req,res)=>{
            const res_obj = await AuthServices.RegisterUser(req.body);
            res.status(httpStatus.CREATED).send(res_obj);
        });
        static  LoginUser = CatchAsync(async(req,res)=>{
            const res_obj = await AuthService. LoginUser(req.body);
            res.status(httpStatus.OK).send(res_obj);
        });
        static  ProfileController = CatchAsync(async(req,res)=>{
            const res_obj = await AuthService.ProfileService(req.user);
            res.status(httpStatus.OK).send(res_obj);
        })


}

module.exports = AuthController;