const { UserModel, ProfileModel } = require("../models");
const ApiError = require("../utils/ApiError");
const httpStatus = require("http-status");  // Make sure httpStatus is imported
const { generatoken } = require("../utils/Tokens.utils");

class AuthService {
  
 
  static async RegisterUser(body) {
    const { email, password, name } = body

    // Check if user already exists
    const checkExist = await UserModel.findOne({ email });

    if (checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Already Registered");
    }

    // Create new user
    const user = await UserModel.create({
      email,
      password,
      name
    });

    // Create profile for the user
    const token = generatoken(user);
    const refresh_token = generatoken(user,'2d')
    await ProfileModelrofil.create({
      user: user._id
      // refresh_token:refresh_token
    });
    
    return {
      msg: "User Registered Successfully",
      token:token // Add token generation logic here if needed
    };
  }
  static async LoginUser(body) {
    const { email, password, name } = body

    // Check if user already exists
    const checkExist = await UserModel.findOne({ email });
    if (!checkExist) {
      throw new ApiError(httpStatus.BAD_REQUEST, "User Not Registered");
    }

    if(password !==checkExist.password){
      throw new ApiError(httpStatus.BAD_REQUEST, "Invalid Credentials");
    }
    const token = generatoken(checkExist)
                  const refresh_token = generatoken(user,'2d')

    return {
      msg: "User Login Successfully",
      token:token // Add token generation logic here if needed
    };
  }
}

module.exports = AuthService;  // Export the correct class
