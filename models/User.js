const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true, validate: {
    validator: (value) => validator.isEmail(value),
    message: 'Invalid email address'
  } 
},
  password: String,
  role: { type: String, enum: ['volunteer', 'intern', 'admin'], default: 'volunteer' }
});

module.exports = mongoose.model("User", userSchema);
