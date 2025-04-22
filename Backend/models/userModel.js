const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
    phone: { type: String, required: true, match: /^[0-9]{10,15}$/ },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, enum: [false, true], default: false },
  },
  { timestamps: true }
);

// create user Collection
const User = mongoose.model("user", UserSchema);

module.exports = User;
