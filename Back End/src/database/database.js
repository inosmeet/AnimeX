const mongoose = require("mongoose");
const findOrCreate = require("mongoose-findorcreate");
  
  const userSchema = new mongoose.Schema({
    fullName: String,
    email: String,
    googleId: String,
    picture: String,
  }, { versionKey: false});
  
  userSchema.plugin(findOrCreate);
  
  const User = mongoose.model("User", userSchema);

  module.exports = User;