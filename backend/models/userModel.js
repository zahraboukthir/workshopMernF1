const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  fullName: { type: String, trim: true },
  email: { type: String, trim: true, lowercae: true },
  password: String,
  createDate: { type: Date, default: Date.now() },
  birthDate: Date,
  blocked: { type: Boolean, default: false },
  image: String,
  role: { type: String, enum: ["client", "admin", "saler"], default: "client" },
});
module.exports=userModel=mongoose.model("user",userSchema)
