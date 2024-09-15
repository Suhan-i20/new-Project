const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,  // Corrected the typo from "typr" to "type"
        required: [true, "Name is required"],
        trim: true
    },
    email: {
        type: String,
        unique: true,
        lowercase: true,  // Use "lowercase" instead of "lower"
        required: [true, "Email is required"]
    },
    password: {
        type: String,
        trim: true,
        required: [true, "Password is required"]
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);

// Corrected the export syntax
module.exports = User;
