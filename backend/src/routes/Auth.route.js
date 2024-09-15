const AuthController = require("../controllers/Auth.controller");
const Validation = require("../middlewares/Validation"); // This doesn't need destructuring, so removed curly braces
const AuthValidation = require("../validations/Auth.validation");

const router = require("express").Router();

// Apply validation, then proceed to the controller if validation passes
router.post("/register",AuthValidation.RegisterUser,Validation, AuthController.RegisterUser);
router.post("/login",AuthValidation.LoginUser,Validation, AuthController.LoginUser);
router.post("/profile",Authentication, AuthController.ProfileController);




module.exports = router;
